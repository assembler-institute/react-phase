import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    gender: "",
    address: "",
    postalCode: "",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
