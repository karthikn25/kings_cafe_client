// // import React, { useEffect, useState } from "react";
// // import "./Category.css";
// // import Base from "../../Base/Base";
// // import img from "../../Images/b.jpeg";
// // import { URL } from "../Server";
// // import { useNavigate } from "react-router-dom";

// // export default function Category() {
// //   const navigate = useNavigate();
// //   const [category, setCategory] = useState([]);

// //   useEffect(() => {
// //     handleGetCategory();
// //   }, []);
// //   const handleGetCategory = async () => {
// //     const res = await fetch(`${URL}/category/get`, {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //     });
// //     const data = await res.json();
// //     console.log(data);
// //     setCategory(data.category);
// //   };
// //   return (
// //     <div id="category">
// //       <Base>
// //         <div id="category-container">
// //           <div className="category-item-container">
// //             {category &&
// //               category.map((d, idx) => (
// //                 <div id="category-item-box" onClick={() => navigate(`/list/${d._id}/${d.name}`)}>
// //                   <div id="category-p-img">
// //                     <img src={d.picture} alt="product" />
// //                   </div>
// //                   <h6 style={{fontFamily:"cursive",textTransform:"capitalize"}}>{d.name}</h6>
// //                 </div>
// //               ))}
// //           </div>
// //         </div>
// //       </Base>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from "react";
// import "./Category.css";
// import Base from "../../Base/Base";
// import { URL } from "../Server";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategory } from "../../Redux/Actions/categoryAction";

// export default function Category() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const {categoryInfo,error}=useSelector((state)=>state.category);

//   const [loading,setLoading]=useState(false);
//   const [category, setCategory] = useState([]);
//   const [search, setSearch] = useState(""); // Manage search input

//   useEffect(() => {
//     const fetchCategory = async()=>{
//       setLoading(true);
//       try {
//         await dispatch(getAllCategory())
//       } catch (error) {
//         console.log(`Error occured to Get Category ${error}`);
//       }finally{
//         setLoading(false)
//       }
//     }
//     fetchCategory();
//   }, [dispatch]);

//   const handleGetCategory = async () => {
//     const res = await fetch(`${URL}/category/get`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const data = await res.json();
//     setCategory(data.category);
//   };

//   // Filter categories based on search input
//   const filteredCategory = category.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div id="category">
//       <Base>
//         <div id="category-container">
//           {/* Search Bar */}
//           <div id="search-container">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search for a category..."
//             />
//             <i className="bx bx-search"></i>
//           </div>

//           <div className="category-item-container">
//             {filteredCategory &&
//               filteredCategory.map((d) => (
//                 <div
//                   key={d._id}
//                   id="category-item-box"
//                   onClick={() => navigate(`/list/${d._id}/${d.name}`)}
//                 >
//                   <div id="category-p-img">
//                     <img src={d.picture} alt="category" />
//                   </div>
//                   <h6 style={{ fontFamily: "cursive", textTransform: "capitalize" }}>
//                     {d.name}
//                   </h6>

                
//                 </div>
//               ))}
//           </div>
//         </div>
//       </Base>
//     </div>
//   );
// }
// src/Components/Category/Category.js

import React, { useEffect, useState } from "react";
import "./Category.css";
import Base from "../../Base/Base";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../Redux/Actions/categoryAction"; // Import your action

export default function Category() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Get category data, error, and loading state from Redux store
  const { categoryInfo, error, loading } = useSelector((state) => state.category);

  const [keyword, setKeyword] = useState(""); // Manage search input

  // Fetch categories when the component mounts
  useEffect(() => {
    dispatch(getAllCategory()); // Dispatch the action to get categories
  }, [dispatch]);

  // Filter categories based on search input
  const filteredCategory = categoryInfo.category&& categoryInfo.category.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div id="category">
      <Base>
        <div id="category-container">
          <div id="search-container">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search for a category..."
            />
            <i className="bx bx-search"></i>
          </div>

          {loading && <div>Loading...</div>}

          {error && <div style={{ color: "red" }}>{error}</div>}

          <div className="category-item-container">
            {filteredCategory&&filteredCategory.length === 0 && !loading ? (
              <div>No categories found</div>
            ) : (
              filteredCategory&&filteredCategory.map((d) => (
                <div
                  key={d._id}
                  id="category-item-box"
                  onClick={() => navigate(`/list/${d._id}/${d.name}`)}
                >
                  <div id="category-p-img">
                    <img src={d.picture} alt="category" />
                  </div>
                  <h6 style={{textTransform: "capitalize" }}>
                    {d.name}
                  </h6>
                </div>
              ))
            )}
          </div>
        </div>
      </Base>
    </div>
  );
}
