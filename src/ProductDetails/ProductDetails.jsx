import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import data from "../fakeData/products.json";
import Products from "../components/Products/Products";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { key } = useParams();



  useEffect(() => {
    const filter = data.find((item) => item.key === key);
    setProduct(filter);
  }, [key]);

//   const location = useLocation();

  return (
    <div>
      {/* <img src={product.img} alt="" />
      <h2> Product Key: {key}</h2>
      <h3>seller : {product.seller}</h3>
      <h3>Price : ${product.price}</h3> */}
      <Products product={product}/>
    </div>
  );
};
export default ProductDetails;
