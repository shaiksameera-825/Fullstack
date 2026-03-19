import Link from './Link/link';
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/navbar';
import "./App.css";
import Landing from './Landing/landing';
// import Sunscreen from"./Sunscreen/sunscreen";
// import Practice from "./Practice/practice";
function App(){
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <BrowserRouter>
    <Navbar cartCount={cartItems.length} setIsLoggedIn={setIsLoggedIn}/>
    <Link />
    <Landing/>
    </BrowserRouter>
   

    // <Practice/>
    // <Sunscreen/>
     
         
  );
}
export default App;