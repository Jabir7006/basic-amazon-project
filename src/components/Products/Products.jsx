import React from "react";
import "./products.css";
import { Link, NavLink } from "react-router-dom";
const Products = (props) => {
  const { id, name, seller, price, stock, img, key } = props.product;


  
  return (
    <div className="product">
      <div className="product-image bg-primary">
        <img src={img} alt="" />
      </div>
      <div className="product-details" key={id}>
        <h6 className="name"> <Link to={'/product/' +key} state={{seller, price, img}} style={{textDecoration : 'none'}}>{name}</Link> </h6>
        <p className="seller">by : {seller}</p>
        <h6 className="mt-4">Price : ${price}</h6>
        <p className="stock">only {stock} left in stock - order soon</p>
        <button className="btn-style" onClick= {() => props.handleAddProduct(props.product)}>
          <i className="fa-solid fa-cart-shopping"></i>add to cart
        </button>
      </div>
    </div>
  );
};

export default Products;
