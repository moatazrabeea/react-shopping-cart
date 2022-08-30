import React from 'react'
import '../../css/Cart/Cart.css'
 function Cart(props) {
  return (
    <div className='cart-wrapper'>
     <div className='cart-title'> Empty Cart</div>
      <div className='cart-itmes'>
        {props.cartItems.map(item =>(
            <div className='cart-item' key={item.id}>
            <img src={item.imageUrl} alt=''></img>
           <div className='cart-info'>
             <div>
             <p>{item.title}</p>
             <p>quantity</p>
             <p>${item.price}</p>
             </div>
             <button>Remove</button>
           </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;
