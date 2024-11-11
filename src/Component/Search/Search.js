import React, { useEffect, useState } from "react";
import Base from "../../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchFoods } from "../../Redux/Actions/foodAction"; // Import your search action

export default function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get food data, error, and loading state from Redux store
  const { foods, error, loading } = useSelector((state) => state.food);

  const { keyword: urlKeyword } = useParams(); // Read the keyword from the URL

  // Local state for the search input field
  const [keyword, setKeyword] = useState(urlKeyword || ""); // Initialize with URL keyword

  // Fetch foods based on search term whenever the keyword changes
  useEffect(() => {
    if (urlKeyword !== keyword) {
      setKeyword(urlKeyword); // Sync the local state with URL param
    }
    dispatch(searchFoods(keyword)); // Dispatch search on keyword change
  }, [keyword, urlKeyword, dispatch]); // Runs when keyword or URL keyword changes

  // Filter foods based on the search input
  const filteredFoods = foods?.filter((item) =>
    item.foodName.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div id="search-page">
      <Base>
        <div id="search-container">
          <div className="search-input-container">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search for a food..."
            />
          </div>

          {/* Loading State */}
          {loading && <div className="loading-message">Loading...</div>}

          {/* Error State */}
          {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}

          {/* Food Items Display */}
          <div className="food-item-container">
            {filteredFoods && filteredFoods.length === 0 && !loading ? (
              <div>No foods found</div>
            ) : (
              filteredFoods?.map((d) => (
                <div
                  key={d._id}
                  className="food-item-box"
                  onClick={() => navigate(`/food/${d._id}`)} // Navigate to food detail page
                >
                  <div className="food-item-image">
                    <img src={d.photo} alt={d.foodName} />
                  </div>
                  <h6 style={{ fontFamily: "cursive", textTransform: "capitalize" }}>
                    {d.foodName}
                  </h6>
                  <p className="food-price" style={{ fontFamily: "cursive" }}>
                    Rs: {d.price}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </Base>
    </div>
  );
}
