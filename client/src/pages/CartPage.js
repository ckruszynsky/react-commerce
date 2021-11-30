import React from "react";
import { useSearchParams, useParams } from "react-router-dom";

const CartPage = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  return (
    <div>
      <h1>Cart</h1>
      <span>Id: {params.id}</span> <br />
      <span>Qty:{searchParams.get("qty")}</span>
    </div>
  );
};

export default CartPage;
