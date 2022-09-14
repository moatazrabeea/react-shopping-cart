import React from 'react'

 function Input(props) {
  return (
    <div>
        <div>
            <label>{props.name}</label>
            <input
             type={props.type} 
             name={props.name} 
             onChange={props.onchange} 
             required/>
        </div>

    
    </div>
  )
}
export default Input