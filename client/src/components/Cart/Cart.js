import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
 function Cart(props) {
 const[showForm,setShowForm] = useState(false)
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
      {props.cartItems.length !== 0 &&(
         <div className='cart-footer'>
         <div className='total'>Total : {props.cartItems.reduce((acc,p) =>{
          return acc + p.price
         },0)} </div>
         <button onClick={()=>setShowForm(true)}>Checkout</button>
       </div>
      )}
      
       {/* checkout form */}
     {showForm && (
       <div className='checkout-form'>
       <span className='close-icon' onClick={()=>setShowForm(false)}> &times; </span>
           <form>
                 <div>
                   <label>Name</label>
                   <input type="text" name='name' required/>
                 </div>

                 <div>
                   <label>Email</label>
                   <input type="email" name='Email' required/>
                 </div>

                 <div>
                   <button type='submit'>Submit</button>
                 </div>
           
           </form>
     </div>
     )}

    </div>
  )
}

export default Cart;
