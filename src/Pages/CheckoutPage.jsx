import React, { useContext } from "react";
import { UserContext } from "../context/User/UserContext";

const CheckoutPage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>This is your cart, {user?.name}</h2>
      <div>CheckoutPage</div>
    </>
  );
};

export default CheckoutPage;
