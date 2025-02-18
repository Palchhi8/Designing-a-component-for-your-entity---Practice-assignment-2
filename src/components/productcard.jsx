// write product card here
import React from "react";
import ViewProductButton from "../components/Button";

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Awesome Product";
  const price = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
