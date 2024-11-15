import React, { useEffect, useState } from "react";
import "./CategoryList.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../../Redux/Actions/foodAction";
import Base from '../../Base/Base'

export default function CategoryList() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { foods, error } = useSelector((state) => state.food);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const navigate = useNavigate();
  const { id, name } = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      try {
        setLoading(true);
        dispatch(getAllFoods(id)); // Fetch foods based on the category ID
      } catch (error) {
        console.error(`Error occurred while fetching foods: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchFood();

    // Set interval to refresh data every 1 minute (60000 ms)
    const interval = setInterval(fetchFood, 60000);

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, [id, dispatch]); // Include 'id' as a dependency to refetch when category changes

  const toggle = (itemId) => {
    setExpandedItemId(itemId === expandedItemId ? null : itemId);
  };

  return (
    <div id="category-list">
      <Base>
        <div id="category-list-container">
          <div id="category-list-head">
            <h5>{name}</h5>
            <i className="bx bx-home" onClick={() => navigate("/")} />
          </div>

          {/* Error Handling */}
          {error && (
            <div className="error-message" style={{ color: "red", fontFamily: "cursive" }}>
              <p>Failed to load foods. Please try again later.</p>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="loading-spinner" style={{ fontFamily: "cursive" }}>
              <p>Loading...</p>
            </div>
          ) : (
            <div id="category-list-item-container">
              {foods.food?.map((d) => (
                <div
                  key={d.id}
                  className="category-list-item-box"
                  onClick={() => toggle(d._id)}
                  style={{
                    height: expandedItemId === d._id || !d.status ? "max-content" : "50px",
                    opacity: d.status ? 1 : 0.5,
                  }}
                >
                  <div className="category-lists">
                    <div className="show-container">
                      <div className="f-detail">
                        <div className="f-details">
                          <img src={d.photo} alt={d.foodName} />
                          <h6>{d.foodName}</h6>
                        </div>
                        <p className="food-price">
                          Rs: {d.price}
                        </p>
                      </div>

                      <div className="f-status">
                        {!d.status && (
                          <p style={{ color: "red" }}>Out of Stock</p>
                        )}
                      </div>
                    </div>
                    <p
                      className="category-detail"
                      style={{
                        display: expandedItemId === d._id ? "block" : "none",
                      }}
                    >
                      {d.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Base>
    </div>
  );
}
