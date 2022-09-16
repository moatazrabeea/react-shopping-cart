import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../Checkout/Checkout';
import Bounce from 'react-reveal/Bounce'
 function Cart(props) {
 const[showForm,setShowForm] = useState(false)

 const[value,setValue] = useState("");

 const handleChange =(e) => {
  
     setValue((prevState) => ({...prevState,[e.target.name]:e.target.value}))
 }

 const submitOrder =(e) => {
    e.preventDefault();
    const order = {
     name:value.name,
     email:value.email
    } 
    console.log(order)
}
  return (
    
    <div className='cart-wrapper'>
     <div className='cart-title'> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
      There is {props.cartItems.length} products in cart
      </p>}</div>
      <Bounce bottom>
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
      </Bounce>
      {props.cartItems.length !== 0 &&(
         <div className='cart-footer'>
         <div className='total'>Total : {props.cartItems.reduce((acc,p) =>{
          return acc + p.price
         },0)} </div>
         <button onClick={()=>setShowForm(true)}>Checkout</button>
       </div>

      )}
      
      <Checkout
          showForm={showForm} 
          setShowForm={setShowForm}
          handleChange={handleChange}
          submitOrder ={submitOrder}
      />

    </div>
  )
}

export default Cart;
