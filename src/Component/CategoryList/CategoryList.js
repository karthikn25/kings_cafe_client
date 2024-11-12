// import React, { useEffect, useState } from "react";
// import "./CategoryList.css";
// import Base from "../../Base/Base";
// import { useNavigate, useParams } from "react-router-dom";
// import { URL } from "../Server";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllFoods } from "../../Redux/Actions/foodAction";

// export default function CategoryList() {
//   const [loading,setLoading]=useState(false);
//   const dispatch = useDispatch();
//   const {foods,error}=useSelector((state)=>state.food);
//   const [expandedItemId, setExpandedItemId] = useState(null);
//   const [food, setFood] = useState([]);
//   const navigate = useNavigate();
//   const { id, name } = useParams();

//   useEffect(() => {
//     const fetchFood = async()=>{
//       try {
//         setLoading(true);
//         dispatch(getAllFoods(id))
//       } catch (error) {
//         console.log(`Error occured to fetch foods ${error}`);
//       }finally{
//         setLoading(false)
//       }
//     }
//     fetchFood();
//   }, []);



//   const toggle = (itemId) => {
//     setExpandedItemId(itemId === expandedItemId ? null : itemId);
//   };

//   return (
//     <div id="category-list">
//       <Base>
//         <div id="category-list-container">
//           <div id="category-list-head">
//             <h5 style={{fontFamily:"cursive"}}>{name}</h5>
//             <i className="bx bx-home" onClick={() => navigate("/")} />
//           </div>

//           <div id="category-list-item-container">
//             {food.map((d) => (
//               <div
//                 key={d.id} // Ensure each item has a unique key
//                 id="category-list-item-box"
//                 onClick={() => toggle(d._id)}
//                 style={{ height: expandedItemId === d._id || !d.status ? "max-content" : "50px" ,opacity: d.status ? 1 : 0.5, }}
//               >
//                 <div id="category-lists">
//                   <div id="show-container">

//                   <div id="f-detail">
//                   <div id="f-details">
//                   <img src={d.photo} alt={d.foodName}/>
//                   <h6 style={{fontFamily:"cursive"}}>{d.foodName}</h6>
//                   </div>
                  
                  
//                   <p id="food-price" style={{fontFamily:"cursive"}}>Rs: {d.price}</p></div>
                    
//                     <div id="f-status">{!d.status && <p style={{ color: 'red' ,fontFamily:"cursive"}}>Out of Stock</p>}
//                     </div>
//                     <p
//                     id="category-detail"
//                     style={{ display: expandedItemId === d._id ? "block" : "none" ,fontFamily:"cursive"}}
//                   >
//                     {d.details}
//                   </p>
//                   </div>
                 
//                 </div>
                
//               </div>
              
//             ))}
//           </div>
//         </div>
//       </Base>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./CategoryList.css";
import Base from "../../Base/Base";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../../Redux/Actions/foodAction";

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
    fetchFood();
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
                          <p style={{ color: "red", fontFamily: "cursive" }}>Out of Stock</p>
                        )}
                      </div>
                   
                      
                    </div>
                    <p
                        className="category-detail"
                        style={{
                          display: expandedItemId === d._id ? "block" : "none",
                          fontFamily: "cursive",
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
