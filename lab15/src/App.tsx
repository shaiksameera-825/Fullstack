import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import Home from "./home";
import Services from "./services";
import Contact from "./contact";
const App: React.FC = () => {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/services" element={<Services />} />
<Route path="/contact" element={<Contact />} />
</Routes>


<Footer />
</BrowserRouter>
);
};


export default App;