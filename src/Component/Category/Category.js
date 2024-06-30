import React from 'react';
import './Category.css'
import Base from '../../Base/Base';
import img from '../../Images/b.jpeg'
import { useNavigate } from 'react-router-dom';


export default function Category() {
  const navigate = useNavigate();

  return (
    <div id='category'>
    <Base>
     <div id='category-container'>
     <div className='category-item-container'> 
     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>
     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>     <div id='category-item-box' onClick={()=>navigate("/list")}>
     <div id='category-p-img'>
     <img src={img} alt='product'/>
     </div>
     <h6>MILKSHAKES</h6>
     </div>
     </div>
    
     </div>
    </Base>
    </div>
  )
}
