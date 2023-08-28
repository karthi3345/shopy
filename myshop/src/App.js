import React ,{useState , isPresent}from 'react';
import './App.css';
import Navbar from"./Components/Navbar";
import Amazon from"./Components/Amazon";
import Cart from"./Components/Cart";
import "./Components/Amazon.css";
function App() {
  const[show, setShow] = useState(true);
  const[cart, setCart] = useState([]);
  const[warning,setWarning]= useState(false);

  const handleClick =(item)=>
  {
   cart.forEach((product)=>
   {
     if(item.id===product.id)
     isPresent = true;


   })
   if(isPresent){
    setWarning(true);
    setTimeout(()=>{
      setWarning(false);
    

   }, 2000);
   return;
  }
  
  setCart([...cart,item]);
  }
  return (
    <React.Fragment>
      <Navbar size={cart.length} setShow={setShow}/>
      
        {
          show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart}/>
      }

      
      {
      	warning && <div className='warning'>Item is already added to your cart</div>
      }
    </React.Fragment>
  )
}

export default App;
