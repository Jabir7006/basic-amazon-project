import React, { useState, useEffect } from "react";
import Products from "../Products/Products";
import "./shop.css";
import fakeData from "../../fakeData/products.json";
import Cart from "../Cart/Cart";
import { addToDb } from "../../utilities/fakedb";

const Shop = () => {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [shipping, setShipping] = useState(0);

  const handleAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const total = newCart.reduce((sum, product) => sum + product.price, 0);
    setTotalMoney(total);
    const shipping = newCart.reduce((sum, product) => sum + 10, 0);
    setShipping(shipping);
    const sameProduct = newCart.filter((pd) => pd.key === product.key);  
    const count = sameProduct.length;
    addToDb(product.key, count);

    // if (total > 100) {
    //   setShipping(0);
    // } else if (total === 0) {
    //   setShipping(0);
    // } else {
    //   setShipping(60);
    // }
  };
  const [search, setSearch] = useState("");

  useEffect(() => {
    const randomProducts = fakeData.sort(() => 0.5 - Math.random()).slice(0, 10);
    setProductData(randomProducts);
  }, []);

  return (
    <section>
      <div className="shop-container">
        <div className="shop-products">
          {productData.map((product, index) => (
            <Products
              key={`${product.id} ${index}`}
              product={product}
              handleAddProduct={handleAddProduct}
            />
          ))}
        </div>
        <div className="shop-cart">
          <Cart cart={cart} totalMoney={totalMoney} shipping={shipping} />
        </div>
      </div>
    </section>
  );
};

export default Shop;
