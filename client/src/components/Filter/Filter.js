import React from 'react'
import "../../css/Filter/Filter.css"
 function Filter() {
  return (
    <div className='filter-wrapper'>
        <h2 className='filter-title'>Filter</h2>
        <div className='number-of-products'>Number of Products 5</div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select className='filter-select'>
               <option value="s">S</option>
               <option value="m">M</option>
               <option value="l">L</option>
               <option value="X">X</option>
               <option value="XL">XL</option>

            </select>
        </div>
        <div className='filter-by-order'>
            <span>Filter</span>
            <select className='filter-select'>
               <option value="latest">latest</option>
               <option value="lowest">lowest</option>
               <option value="heighest">heighest</option>
            
            </select>
        </div>
    </div>
    
  )
}

export default Filter;