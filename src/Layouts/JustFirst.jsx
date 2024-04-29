import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Component/lastpart/Footer";

export default function JustFirst() {
  return (
    <>
     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />

      <Header/>
      {/* <Home /> */}
      <Outlet />
      <Footer />
    </>
  );
}
