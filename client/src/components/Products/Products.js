import React,{useEffect, useState} from "react";
import  '../../css/Products/Products.css'
import ProductModal from "./ProductModal";
import  Bounce  from "react-reveal/Bounce";
import { connect } from "react-redux"
import { fetchProducts } from "../../actions/products";

 function Products(props) {
  const[product,setProduct] = useState('');

  const openModal = (product)=>{
    setProduct(product)
  }

  const closeModal = ()=>{
    setProduct(false)
  }

  useEffect(()=>{
    props.fetchProducts()
  },[])

  return (
    <Bounce left cascade>
    <div className="product-wrapper">
        {props.products && props.products.length ? props.products.map(product => (
          <div key={product.id}>    
            <div className='product-item'>
            <a href="#" onClick={()=>openModal(product)}>
                <img src={product.imageUrl} alt={product.title}></img>
              </a>
                <div className='product-desc'>
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                </div>
                <button onClick={() => props.addToCart(product)}>Add to Cart</button>
            </div>
          </div>  
          
        )) : "loading ....."}

        <ProductModal product={product} closeModal={closeModal}>

        </ProductModal>
    </div>
    </Bounce>
  )
}
export default connect((state)=>{
  return {
    products: state.products.products
  }
}, {fetchProducts} )(Products)
