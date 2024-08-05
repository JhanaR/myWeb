import {cartContext} from '../App';
import "../FoodApp/Product.css";
import { useContext } from "react";

//export const Product = ({ product, cart, setCart }) => {
export const Product = ({product}) => {
  const {cart, setCart} = useContext(cartContext);
  const name =
    product.name.length > 20
      ? product.name.substring(0, 19) + ".."
      : product.name;
  const addCart = () => {
    setCart([...cart,product])
  };
  const removeCart = () => {
    setCart(cart.filter((c)=>c.id !== product.id))
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="details">
        <h1>{name}</h1>
        <h2>Price rs:{product.price}</h2>
        {cart.includes(product) ? (
          <button className="btnRemove" onClick={removeCart}>
            Remove from cart
          </button>
        ) : (
          <button onClick={addCart}> add to cart</button>
        )}
      </div>
    </div>
  );
};
