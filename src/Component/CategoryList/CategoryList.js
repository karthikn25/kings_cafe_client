import React, { useEffect, useState } from "react";
import "./CategoryList.css";
import Base from "../../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../Server";

export default function CategoryList() {
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { id, name } = useParams();

  useEffect(() => {
    handleGetFood();
  }, []);

  const handleGetFood = async () => {
    const res = await fetch(`${URL}/food/getall/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFood(data.food);
    console.log(food);
  };

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

          <div id="category-list-item-container">
            {food.map((d) => (
              <div
                key={d.id} // Ensure each item has a unique key
                id="category-list-item-box"
                onClick={() => toggle(d._id)}
                style={{ height: expandedItemId === d._id || !d.status ? "max-content" : "50px" ,opacity: d.status ? 1 : 0.5, }}
              >
                <div id="category-lists">
                  <div id="show-container">

                  <div id="f-detail">
                  <div id="f-details">
                  <img src={d.photo} alt={d.foodName}/>
                  <h6>{d.foodName}</h6>
                  </div>
                  
                  
                  <p>Rs: {d.price}</p></div>
                    
                    <div id="f-status">{!d.status && <p style={{ color: 'red' }}>Out of Stock</p>}
                    </div>

                  </div>
                  <p
                    id="category-detail"
                    style={{ display: expandedItemId === d._id ? "block" : "none" }}
                  >
                    {d.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Base>
    </div>
  );
}
