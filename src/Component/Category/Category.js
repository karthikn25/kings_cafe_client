import React, { useEffect, useState } from "react";
import "./Category.css";
import Base from "../../Base/Base";
import img from "../../Images/b.jpeg";
import { URL } from "../Server";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    handleGetCategory();
  }, []);
  const handleGetCategory = async () => {
    const res = await fetch(`${URL}/category/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    setCategory(data.category);
  };
  return (
    <div id="category">
      <Base>
        <div id="category-container">
          <div className="category-item-container">
            {category &&
              category.map((d, idx) => (
                <div id="category-item-box" onClick={() => navigate(`/list/${d._id}/${d.name}`)}>
                  <div id="category-p-img">
                    <img src={d.picture} alt="product" />
                  </div>
                  <h6>{d.name}</h6>
                </div>
              ))}
          </div>
        </div>
      </Base>
    </div>
  );
}
