import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
<<<<<<< Updated upstream


function App() {
=======
import React,{useState} from "react";
import data from './data.json'
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";
function App() {
 const[products,setProducts] = useState(data);

 const[size,setSize] = useState("");
 const[order,setOrder] =useState("");
 const[cartItems,setCartItmes] = useState(data)

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
  
>>>>>>> Stashed changes
  return (
    <div className="layout">
    
      <Header />
      <main>
<<<<<<< Updated upstream
        content
=======
        <div className="wrapper">
          <Products products={products}/>
          <Filter 
          handleFilterBySize ={handleFilterBySize}
          handleFilterByOrder = {handleFilterByOrder}
          size = {size}
          order = {order}
          numberOfProducts = {products.length}
          />
        </div>
        <Cart cartItems = {cartItems}/>
>>>>>>> Stashed changes
      </main>
      <Footer />
     </div>
   
  );
}

export default App;
