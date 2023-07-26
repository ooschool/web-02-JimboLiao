import React from "react";
import { Outlet } from "react-router-dom";
import RootHeader from "./RootHeader";
import RootFooter from "./RootFooter";

const Root = () => {
  return (
    <>
      <RootHeader />
      <div className="container">
        <Outlet />
      </div>
      <RootFooter />
    </>
  );
};

export default Root;
