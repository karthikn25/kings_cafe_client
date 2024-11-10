// import React, { useEffect, useState } from "react";
// import "./Category.css";
// import Base from "../../Base/Base";
// import img from "../../Images/b.jpeg";
// import { URL } from "../Server";
// import { useNavigate } from "react-router-dom";

// export default function Category() {
//   const navigate = useNavigate();
//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     handleGetCategory();
//   }, []);
//   const handleGetCategory = async () => {
//     const res = await fetch(`${URL}/category/get`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//     console.log(data);
//     setCategory(data.category);
//   };
//   return (
//     <div id="category">
//       <Base>
//         <div id="category-container">
//           <div className="category-item-container">
//             {category &&
//               category.map((d, idx) => (
//                 <div id="category-item-box" onClick={() => navigate(`/list/${d._id}/${d.name}`)}>
//                   <div id="category-p-img">
//                     <img src={d.picture} alt="product" />
//                   </div>
//                   <h6 style={{fontFamily:"cursive",textTransform:"capitalize"}}>{d.name}</h6>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </Base>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./Category.css";
import Base from "../../Base/Base";
import { URL } from "../Server";
import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState(""); // Manage search input

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
    setCategory(data.category);
  };

  // Filter categories based on search input
  const filteredCategory = category.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="category">
      <Base>
        <div id="category-container">
          {/* Search Bar */}
          <div id="search-container">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a category..."
            />
            <i className="bx bx-search"></i>
          </div>

          <div className="category-item-container">
            {filteredCategory &&
              filteredCategory.map((d) => (
                <div
                  key={d._id}
                  id="category-item-box"
                  onClick={() => navigate(`/list/${d._id}/${d.name}`)}
                >
                  <div id="category-p-img">
                    <img src={d.picture} alt="category" />
                  </div>
                  <h6 style={{ fontFamily: "cursive", textTransform: "capitalize" }}>
                    {d.name}
                  </h6>

                  {/* Ratings (Example with stars) */}
                  <div className="category-rating">
                    <span>{d.rating || 0} </span>
                    <span>{'★'.repeat(Math.round(d.rating))}</span>
                    <span>{'☆'.repeat(5 - Math.round(d.rating))}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Base>
    </div>
  );
}
