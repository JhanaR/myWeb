import { useEffect, useState } from 'react';
import '../FoodApp/ViewCart.css'
import { useContext } from 'react';
import { cartContext } from '../App';

//export const ViewCart = ({cart, setCart}) => {
  export const ViewCart = () => {
  const {cart} = useContext(cartContext)
  const [total, setTotal] = useState((0));
  useEffect (()=> {
  setTotal(cart.reduce((acc,curr)=> acc + parseInt(curr.price),0));
  },[cart]);
    return (
      <>
      <h1 className="cart-heading">Cart Products</h1>
        <div className = "cart-container">
          {cart.map((product)=>(
           <div className = "cart-product"  key={product.id}>
            <div className = "img">
              <img src={product.imageUrl} alt="image"/>
            </div>
            {/* <div classname = "cart-product-details">
              <h3>Product Name</h3>
              <p>Price rs: 50</p>
            </div>
          </div>
          <div className = "cart-product">
            <div className = "img">
              <img src="https://placehold.co/100x100" alt="image"/>
            </div>
            <div classname = "cart-product-details">
              <h3>Product Name</h3>
              <p>Price rs: 50</p>
            </div>
          </div>
          <div className = "cart-product">
            <div className = "img">
              <img src="https://placehold.co/100x100" alt="image"/>
            </div> */}
            <div classname = "cart-product-details">
              <h3>{product.name}</h3>
              <p>Price rs: {product.price}</p>
            </div> 
          </div>
          ))}
        </div>
        <h3 className ="cart-amount">Total amount: {total}</h3>
      </>
    );
  };
  