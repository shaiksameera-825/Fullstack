import Home from "../Home/home";
import Login from "../Login/login";
import About from"../About/about";
import Contact from "../Contact/contact";
import Features from"../Features/features";
import Sign from"../Sign/sign";
import Sunscreen from "../Sunscreen/sunscreen";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Lipstick from "../Lipstic/lipstic";
import Facewash from"../Facewash/facewash";
import Moisturizer from"../Moisturizer/moistur";
import Nailpolish from "../Nailpolish/nailpolish";
import Powder from "../Powder/powder";
import Perfume from "../Perfume/perfume";
import Eyeliner from"../Eyeliner/eyeliner";
import Landing from "../Landing/landing";
import Cart from"../Cart/cart";
function AppRouter({ cartItems, setCartItems, setIsLoggedIn }) {
  // const [cartItems, setCartItems] = useState([]);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about"element={<About/>}/>  
    <Route path="/contact"element={<Contact/>}/>
    <Route path="/features"element={<Features/>}/>
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
    <Route path="/sign" element={<Sign />} />
    <Route path="/sunscreen"element={<Sunscreen/>}/>
    <Route path="/lipstic"element={<Lipstick cartItems={cartItems} setCartItems={setCartItems} />}/>
    <Route path="/facewash"element={<Facewash/>}/>
    <Route path="/moistur"element={<Moisturizer/>}/>
    <Route path="/nailpolish"element={<Nailpolish/>}/>
    <Route path="/powder"element={<Powder/>}/>
    <Route path="/perfume"element={<Perfume/>}/>
    <Route path="/eyeliner"element={<Eyeliner/>}/>
    <Route path="/landing" element={<Landing/>}/>
    <Route path="/cart"element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}/>
    {/* <Route path="/payment" element={<Payments />} /> */}
    </Routes>
  );
}
export default AppRouter;