import React from "react";
import Header from "../Component/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Component/lastpart/Footer.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutAuth() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />

      <Header sign={true} />
      <Outlet />
      <Footer />
    </>
  );
}
