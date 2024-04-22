import React from "react";
import Header from "../Component/Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Component/lastpart/Footer.jsx";
import { Offline } from "react-detect-offline";
import { toast } from "react-toastify";

export default function LayoutAPP() {
  const notifyOffline = () => {
    toast.error("You are currently offline", {
      position: "top-right",
    });
  };

  return (
    <>
      <Header />
      <Offline>{notifyOffline()}</Offline>
      <Outlet />
      <Footer />
    </>
  );
}
