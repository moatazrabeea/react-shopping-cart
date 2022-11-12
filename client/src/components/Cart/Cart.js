import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import Checkout from '../Checkout/Checkout';
import Bounce from 'react-reveal/Bounce'
import { connect } from 'react-redux';
import { removeCart } from '../../actions/cart';
import OrderModal from './OrderModal';
import {createOrder,clearOrder} from '../../actions/order';
import { words } from '../../words';

 function Cart(props) {
 const[showForm,setShowForm] = useState(false)
 const[value,setValue] = useState("");
 const handleChange =(e) => {
      
     setValue((prevState) => ({...prevState,[e.target.name]:e.target.value}))
 }

 const closeModal =()=>{
 props.clearOrder()
 setShowForm(false)
 }

 const submitOrder =(e) => {
  
    e.preventDefault();
    const order = {
     title:value.title,
     email:value.email
    } 
    props.createOrder(order)
}
  return (
    
    <div className='cart-wrapper'>
     <div className='cart-title'> {props.cartItems.length === 0 ? 'Cart Empty' : <p>
      {words.cartHeader} {props.cartItems.length}
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
             <p>{words.cartTitle} {item.title}</p>
             <p>{words.cartQty} {item.qty}</p>
             <p>{words.cartPrice} ${item.price}</p>
             </div>
             <button onClick={() => props.removeCart(item)}>{words.removebtn}</button>
           </div>
        </div>
        ))}
      </div>
      </Bounce>
      {props.cartItems.length !== 0 &&(
         <div className='cart-footer'>
         <div className='total'>{words.total} {props.cartItems.reduce((acc,p) =>{
          return acc + p.price
         },0)} </div>
         <button onClick={()=>setShowForm(true)}>{words.checkout}</button>
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
