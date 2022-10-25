import React from 'react'
import "../../css/Filter/Filter.css"
import Flip from "react-reveal/Flip"
import { connect } from "react-redux" 
import  {filteredSize,filteredSort} from "../../actions/products"
 function Filter(props) {
  return (
    <Flip>
    {props.filteredProducts && <div className='filter-wrapper'>
        <h2 className='filter-title'>Filter</h2>

        <div className='number-of-products'>Number of Products {props.filteredProducts.length}</div>
        <div className='filter-by-size'>
            <span>Filter</span>
            <select className='filter-select' value={props.size} onChange={(e)=>props.filteredSize(props.products,e.target.value)}>
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
            <select className='filter-select' value={props.sort} onChange={(e)=>props.filteredSort(props.filteredProducts,e.target.value)}>
               <option value="latest">latest</option>
               <option value="lowest">lowest</option>
               <option value="heighest">heighest</option>
            
            </select>
        </div>
    </div>}
    </Flip>
  )
}

export default connect((state)=>{
  return{
    sort:state.products.sort,
    size:state.products.size,
    products:state.products.products,
    filteredProducts:state.products.filteredProducts
  }
},{
  filteredSize,
  filteredSort
})
(Filter);