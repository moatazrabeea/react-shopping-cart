
import React,{useEffect, useState} from "react"
import data from './data.json'
import Products from "./components/Products/Products"
import Filter from "./components/Filter/Filter"
import Cart from "./components/Cart/Cart"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Provider} from "react-redux"
import store from "./store/store"
function App() {

 const[products,setProducts] = useState(data);

 const[size,setSize] = useState("");
 const[order,setOrder] =useState("");

 const[cartItems,setCartItmes] = useState(JSON.parse(localStorage.getItem('cartitems')) || [])


const handleFilterBySize =(e) => {
setSize(e.target.value);
if(e.target.value === 'All'){

setProducts(data)
}
else{
let productsClone = [...products]
let newProducts = productsClone.filter(p => p.size.indexOf(e.target.value) !== -1)

setProducts(newProducts)
    }
}

 const handleFilterByOrder = (e) => {
   setOrder(e.target.value)
   let order = e.target.value;
   let productsClone = [...products];

   let newProducts = productsClone.sort(function(a,b){
        if (order === 'lowest') {
          return a.price - b.price
        } 
        else if (order === 'heighest'){
          return b.price - a.price
        }
        else {
          return a.id < b.id ? 1 : -1
        }
   });
   setProducts(newProducts)
 }

 const removeFromCart = (product) => {
     const cartItemsClone = [...cartItems];
     setCartItmes(cartItemsClone.filter(p => p.id != product.id));
 }

 const addToCart = (product) =>{
       const cartItemsClone = [...cartItems];
       let productExist = false;
       cartItemsClone.forEach(p => {
        if(p.id === product.id){
          p.qty++;
          productExist = true; 
        }
      })
        if(!productExist){
          cartItemsClone.push({...product,qty:1});
        }
       setCartItmes(cartItemsClone);
 }
  
useEffect(()=>{
  localStorage.setItem('cartitems',JSON.stringify(cartItems))
},[cartItems])

  return (
    <Provider store={store}>
          <div className="layout">
        
        <Header />
        <main>
          <div className="wrapper">
            <Products products={products} addToCart={addToCart}/>
            <Filter 
            handleFilterBySize ={handleFilterBySize}
            handleFilterByOrder = {handleFilterByOrder}
            size = {size}
            order = {order}
            numberOfProducts = {products.length}
            />
          </div>
          <Cart cartItems = {cartItems} removeFromCart={removeFromCart}/>

        </main>
        <Footer />
      </div>
    </Provider>
   
  );
}

export default App;
