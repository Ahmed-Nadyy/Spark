import React from "react";
import Header from "../Component/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Component/lastpart/Footer.jsx";
import { Offline } from "react-detect-offline";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LayoutAPP() {
  const notifyOffline = () => {
    toast.error(
      "You are currently offline"
    );
  };

  return (
    <>
     <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />
      <Header />
      <Offline>{notifyOffline}</Offline>
      <Outlet />
      <Footer />
    </>
  );
}
