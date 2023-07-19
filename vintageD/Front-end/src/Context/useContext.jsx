import { useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [cartItem, setcartItem] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUserName] = useState("");

  function login() {
    
    
      setIsAuth(true)
    
    
  }

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("email");
    window.location.reload()
    setIsAuth(false);
  }

  const addToCart = (data) => {
    setcartItem([...cartItem, data]);
  };

  const deleteFromCart = (id) => {
    const deletedAryy = cartItem.filter((item) => id != item.id);
    setcartItem(deletedAryy);
    
  };
  console.log(isAuth)
  

  return (
    <AppContext.Provider value={{ addToCart, deleteFromCart, isAuth, login, cartItem, setUserName, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;