
import { BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import { Header } from "./FoodApp/Header";
import { Home } from "./FoodApp/Home";
import { ViewCart } from "./FoodApp/ViewCart";
import { useState } from "react";
import { createContext } from "react";


export const cartContext = createContext();


function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{cart, setCart}}>
  <BrowserRouter>
      <Header cart={cart} />
      <div className="container">
      <Routes>
        <Route path ="/" element ={<Home />}/> 
        <Route path ="/Cart" element ={<ViewCart />}/>
      </Routes>
      </div>
      </BrowserRouter>
      </cartContext.Provider>
  );
}

export default App;
