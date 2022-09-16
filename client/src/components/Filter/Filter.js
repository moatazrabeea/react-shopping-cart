import React from 'react'
import "../../css/Filter/Filter.css"
import Flip from "react-reveal/Flip"
 function Filter(props) {
  return (
    <Flip>
    <div className='filter-wrapper'>
        <h2 className='filter-title'>Filter</h2>

        <div className='number-of-products'>Number of Products {props.numberOfProducts}</div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select className='filter-select' value={props.size} onChange={props.handleFilterBySize}>
            <option value="All">All</option>
               <option value="s">S</option>
               <option value="m">M</option>
               <option value="l">L</option>
               <option value="X">X</option>
               <option value="XL">XL</option>

            </select>
        </div>
        <div className='filter-by-order'>
            <span>Filter</span>
            <select className='filter-select' value={props.order} onChange={props.handleFilterByOrder}>
               <option value="latest">latest</option>
               <option value="lowest">lowest</option>
               <option value="heighest">heighest</option>
            
            </select>
        </div>
    </div>
    </Flip>
  )
}

export default Filter;