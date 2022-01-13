
import './App.css';
import TabsRouter from './components/Header';
import SingleCategory from './components/SingleCategory';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';
import Privacy from './components/Privacy'
import axios from 'axios';
import React , { useState , useEffect, createContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";
export const Context = createContext(null);
export const CartContext = createContext(null);

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      try {
        let response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    //We check for a cart in localStorage
    function checkCart(){
      let cartLocal = JSON.parse(window.localStorage.getItem("cart"));
      if(cartLocal!=null){
        setCart(cartLocal);
      }
    }
    fetchApi();
    checkCart();
  }, []);

  //console.log(products);

  return (
    <Router >
    <CartContext.Provider value={{ cart, setCart }}>
    <Context.Provider value={products}>
    <div className="App">
      <TabsRouter />
      <Routes >
        <Route path="/" element={<h2>HomePage</h2>} />
        <Route path="/single-category/:cat" element={<SingleCategory />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<h2>About us</h2>} />
        <Route path="/privacy-policy" element={<Privacy />} />
       </Routes>
       {/* <Footer /> */}

    </div>
    </Context.Provider>
</CartContext.Provider>

    </Router>
  );
}

export default App;
