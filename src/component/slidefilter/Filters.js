import React from 'react'
function Filters() {
return (
<div>
   <div className="irish-sidebar mt-30">
      <div className="filters">
         <ul>
            <li className="mb-2"><span>FILTERS</span> <a href="" className="pull-right">Clear All</a></li>
            <li>Rs.200-Rs.600 <a href="" className="pull-right"><i className="fa fa-times"></i></a></li>
            <li>S <a href="" className="pull-right"><i className="fa fa-times"></i></a></li>
            <li>Silk <a href="" className="pull-right"><i className="fa fa-times"></i></a></li>
            <li>Gold <a href="" className="pull-right"><i className="fa fa-times"></i></a></li>
         </ul>
      </div>
      <div className="sidebar-divider"></div>
      <ul  className="accordion">
         <li>
            <div className="link">Price</div>
            {/* <ul className="submenu">
               <section className="range-slider">
                  <div className="slider-thumb" ></div>
                  <div className="slider-thumb" ></div>
                  <input name="range-1" value="0" min="0" max="1250" step="1" type="range" />
                  <input name="range-2" value="1250" min="0" max="1250" step="1" type="range" />
               </section>
            </ul> */}
         </li>
         <div className="sidebar-divider"></div>
         <li>
            <div className="link">RATINGS</div>
            <ul className="submenu">
               <div className="checkbox">
                  <label><input type="checkbox" />4 stars(32)</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />5 stars(123)</label>
               </div>
            </ul>
         </li>
         <div className="sidebar-divider"></div>
         <li>
            <div className="link">Size</div>
            <ul className="submenu">
               <div className="checkbox">
                  <label><input type="checkbox" />Free</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />XS</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />S</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />M</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />L</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />XL</label>
               </div>
            </ul>
         </li>
         <div className="sidebar-divider"></div>
         <li>
            <div className="link">FABRIC</div>
            <ul className="submenu">
               <div className="checkbox">
                  <label><input type="checkbox" />Cotton</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />Silk</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />Chiffon</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />Fancy</label>
               </div>
            </ul>
         </li>
         <div className="sidebar-divider"></div>
         <li>
            <div className="link">COLOR</div>
            <ul className="submenu">
               <div className="checkbox">
                  <label><input type="checkbox" />White</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />Gold</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />Silver</label>
               </div>
               <div className="checkbox">
                  <label><input type="checkbox" />Red</label>
               </div>
            </ul>
         </li>
      </ul>
   </div>
   <div className="clearfix"></div>
   <div className="side_adv"></div>
</div>
)
}
export default Filters


    {/* <i className="fa fa-chevron-down"></i> */}