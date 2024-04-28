import React from "react";
import Home from "../Component/Home/Home";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function JustFirst() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />

      <Header/>
      <Home />
      <Outlet />
    </>
  );
}
