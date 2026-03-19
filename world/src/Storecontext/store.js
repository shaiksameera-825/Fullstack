import { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart ✅`);
    } else {
      alert(`${product.name} is already in the cart!`);
    }
  };

  // Fixed login
  const login = (email, password) => {
    const validEmail = "sameera@example.com";
    const validPassword = "12345";

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCart([]);
  };

  return (
    <StoreContext.Provider value={{ isLoggedIn, addToCart, cart, login, logout }}>
      {children}
    </StoreContext.Provider>
  );
}; 