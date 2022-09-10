import React from 'react'
import '../../css/Cart/Cart.css'
 function Cart(props) {
  return (
    <div className='cart-wrapper'>
     <div className='cart-title'> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
      There is {props.cartItems.length} products in cart
      </p>}</div>
      <div className='cart-itmes'>
        {props.cartItems.map(item =>(
            <div className='cart-item' key={item.id}>
            <img src={item.imageUrl} alt=''></img>
           <div className='cart-info'>
             <div>
             <p>{item.title}</p>
             <p>quantity :{item.qty}</p>
             <p>${item.price}</p>
             </div>
             <button onClick={() => props.removeFromCart(item)}>Remove</button>
           </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Cart;
