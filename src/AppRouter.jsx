import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home></Home>}
      >
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes></BrowserRouter>
  );
};

export default AppRouter;
