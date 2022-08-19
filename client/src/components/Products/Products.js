import React from 'react'

 function Products(props) {
  console.log(props)
  return (
    <div className="product-wrapper">
        {props.products.map(product => (
          <div key={product.id}>    
            <div className='product-item'>
                <img src={product.imageUrl} alt={product.title}></img>
                <div className='product-desc'>
                    <p>{product.title}</p>
                    <span>{product.price}</span>
                </div>
                <button>Add to Cart</button>
            </div>
          </div>  
        ))}
    </div>
  )
}
export default Products
