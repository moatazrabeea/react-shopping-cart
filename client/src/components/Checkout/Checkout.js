import React from 'react'
import "../../css/Checkout/Checkout.css"
import Input from '../Input/Input';
import Zoom  from 'react-reveal/Zoom'
 function Checkout(props) {
  return (
     <Zoom>
     {props.showForm && (
        <div className='checkout-form'>
        <span className='close-icon' onClick={()=>props.setShowForm(false)}> &times; </span>
            <form>
                  <Input 
                      label="name"
                      type="text"
                      name="name"
                      onchange={props.handleChange}
                   />
 
                 <Input 
                      label="Email"
                      type="email"
                      name="email"
                      onchange={props.handleChange}
                   />

                  <div>
                    <button type='submit' onClick={props.submitOrder}>Submit</button>
                  </div>
            
            </form>
      </div>
      )}
      </Zoom>
  )
}
export default Checkout;