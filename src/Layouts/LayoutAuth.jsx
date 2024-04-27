import React from "react";
import Header from "../Component/Header/Header.jsx"
import { Outlet } from "react-router-dom";
import Footer from  "../Component/lastpart/Footer.jsx"

export default function LayoutAuth() {
  return (
    <>
      <Header sign={true} />
      <Outlet />
      <Footer />
    </>
  );
}
