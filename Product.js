import React, { useState } from "react";

function ProductQuantity() {
  const [productQuantity, setproductQuantity] = useState(1);
  const [productPrice, setproductPrice] = useState(30999);
  
 
const addProductQuantity = () => 
 setproductQuantity(productQuantity + 1);
  let removeProductQuantity = () => setproductQuantity(productQuantity - 1);
  if(productQuantity<=1) {
    removeProductQuantity = () => setproductQuantity(1);
  }

  return (
    <>
    <div> 
      <div><button class="button1" text-align="center" onClick={addProductQuantity}>+</button></div>
<h1>{productQuantity}</h1>
      <button class="button2"onClick={removeProductQuantity}>-</button>
    </div>
    <div class="customerQuantity">Based on your quantity, Price you must pay is  <div class="customerPrice">&#x20b9;{productQuantity*productPrice}</div></div>
    </>
  );
}
export default ProductQuantity;
