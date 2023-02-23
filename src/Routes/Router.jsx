import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import CheckoutPage from "../Pages/CheckoutPage";
import ErrorPage from "../Pages/ErrorPage";
import Navbar from "../components/Navbar/Navbar";

export const RouterPaths = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<ErrorPage />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

// export default RouterPaths;
