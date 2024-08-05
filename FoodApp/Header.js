import React from "react";
import {Link} from "react-router-dom"// for nav link we can use this too
import '../FoodApp/Header.css'


export const Header = ({cart}) => {
return (
    <div className = "navbar">
        <div className ="logo">zomato</div>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Cart"}><span className = "cart-count">{cart.length}</span>View Cart</Link>
            </li>
        </ul>
    </div>
);
};