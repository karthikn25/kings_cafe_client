import React, { useState } from "react";
import "./CategoryList.css";
import Base from "../../Base/Base";
import { useNavigate } from "react-router-dom";

export default function CategoryList() {
  const [show,setShow]=useState();
 
  const toggle = ()=>setShow(!show);
  const navigate = useNavigate();
  return (
    <div id="category-list">
      <Base>
        <div id="category-list-container">
        <div id="category-list-head">
        <h5>MILKSHAKES</h5>
        <i class='bx bx-home' onClick={()=>navigate("/")}></i>
        </div>
        
          <div id="category-list-item-container">
          <div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
          <div id="category-lists">
          <div id="show-container">
          <h6>COOL MILKSHAKES</h6>
          <p>Rs:90</p>
          </div>
            
            <p id="category-detail" style={{display:show ? "block" :"none"}}>
              Melt the dark chocolate in a heatproof bowl over a pan of
              simmering water. Dip the rim of a large sundae glass in the
              chocolat, then drizzle the rest around the inside of the rim ,
              letting it trickle down inside the glass.
            </p>
          </div>
        </div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
        <div id="category-lists">
        <div id="show-container">
        <h6>COOL MILKSHAKES</h6>
        <p>Rs:90</p>
        </div>
          
          <p id="category-detail" style={{display:show ? "block" :"none"}}>
            Melt the dark chocolate in a heatproof bowl over a pan of
            simmering water. Dip the rim of a large sundae glass in the
            chocolat, then drizzle the rest around the inside of the rim ,
            letting it trickle down inside the glass.
          </p>
        </div>
      </div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
      <div id="category-lists">
      <div id="show-container">
      <h6>COOL MILKSHAKES</h6>
      <p>Rs:90</p>
      </div>
        
        <p id="category-detail" style={{display:show ? "block" :"none"}}>
          Melt the dark chocolate in a heatproof bowl over a pan of
          simmering water. Dip the rim of a large sundae glass in the
          chocolat, then drizzle the rest around the inside of the rim ,
          letting it trickle down inside the glass.
        </p>
      </div>
    </div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
    <div id="category-lists">
    <div id="show-container">
    <h6>COOL MILKSHAKES</h6>
    <p>Rs:90</p>
    </div>
      
      <p id="category-detail" style={{display:show ? "block" :"none"}}>
        Melt the dark chocolate in a heatproof bowl over a pan of
        simmering water. Dip the rim of a large sundae glass in the
        chocolat, then drizzle the rest around the inside of the rim ,
        letting it trickle down inside the glass.
      </p>
    </div>
  </div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
  <div id="category-lists">
  <div id="show-container">
  <h6>COOL MILKSHAKES</h6>
  <p>Rs:90</p>
  </div>
    
    <p id="category-detail" style={{display:show ? "block" :"none"}}>
      Melt the dark chocolate in a heatproof bowl over a pan of
      simmering water. Dip the rim of a large sundae glass in the
      chocolat, then drizzle the rest around the inside of the rim ,
      letting it trickle down inside the glass.
    </p>
  </div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div><div id="category-list-item-box" onClick={toggle} style={{height:show ? "max-content" : "20px"}}>
<div id="category-lists">
<div id="show-container">
<h6>COOL MILKSHAKES</h6>
<p>Rs:90</p>
</div>
  
  <p id="category-detail" style={{display:show ? "block" :"none"}}>
    Melt the dark chocolate in a heatproof bowl over a pan of
    simmering water. Dip the rim of a large sundae glass in the
    chocolat, then drizzle the rest around the inside of the rim ,
    letting it trickle down inside the glass.
  </p>
</div>
</div>
         
        
          </div>
        </div>
      </Base>
    </div>
  );
}
