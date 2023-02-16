import React from "react";
import Navbar from "../components/Navbar";

const withNavbar = (Children: React.FC) => {
  return (
    <>
      <Navbar />
      <Children />
    </>
  );
};

export default withNavbar;