import React from "react";
import Link from "next/link";
import { PROFILE } from 'web/routes';

const Navbar = () => {
    // todo get user from context
  return (
    <div className="navbar">
      <h1>Rucode</h1>
      <Link {...PROFILE('9')}>
        <div className="avatar" />
      </Link>
    </div>
  );
};

export default Navbar;