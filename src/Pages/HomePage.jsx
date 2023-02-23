import React, { useContext } from "react";
import { ProductsContainer } from "../components/Products";
import { UserContext } from "../context/User/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  // console.log(user);

  return (
    <>
      <h2>Welcome back, {user?.name}</h2>
      <ProductsContainer />
    </>
  );
};

export default HomePage;
