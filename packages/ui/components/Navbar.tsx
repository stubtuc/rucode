import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Rucode</h1>
      <Link href="/profile">
        <div className="avatar" />
      </Link>
    </div>
  );
};

export default Navbar;