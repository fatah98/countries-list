import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const PageLayout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <div className="w-full my-5 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
