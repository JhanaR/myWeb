import React, { useState } from "react";
import data from './Products.json';
import {Product} from '../FoodApp/Product';
import '../FoodApp/Home.css'

//export const Home = ({cart, setCart}) => {
  export const Home = () => {
  const [products] = useState(data);
  console.log(products);
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product= {product}/> //cart={cart} setCart={setCart} /> 
      ))}
    </div>
  );
};
