import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../Checkout/Checkout';
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux';
import { removeCart } from '../../actions/cart';
import OrderModal from './OrderModal';
import {createOrder,clearOrder} from '../../actions/order';

 function Cart(props) {
 const[showForm,setShowForm] = useState(false)

 const[value,setValue] = useState("");
 const[order,setOrder] = useState(false);

 const handleChange =(e) => {
  
     setValue((prevState) => ({...prevState,[e.target.name]:e.target.value}))
 }

 const closeModal =()=>{
 props.clearOrder()
 setShowForm(false)
 }

 const submitOrder =(e) => {
  debugger;
    e.preventDefault();
    const order = {
     name:value.name,
     email:value.email
    } 
    props.createOrder(order)
}
  return (
    
    <div className='cart-wrapper'>
     <div className='cart-title'> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
      There is {props.cartItems.length} products in cart
      </p>}</div>
      {/* Modal */}
      <OrderModal order ={props.order} closeModal={closeModal} cartItems={props.cartItems}/>
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
             <button onClick={() => props.removeCart(item)}>Remove</button>
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

export default connect ((state)=>{
  return {
    order:state.order.order,
    cartItems:state.cart.cartItems
  }
}, {removeCart,createOrder,clearOrder} )(Cart)
