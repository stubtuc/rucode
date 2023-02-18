import React, {ReactElement} from "react";
import Link from "next/link";
import { PROFILE } from 'web/routes';
import {useUser} from "web/hooks/useUser";

interface INavbar {
    children?: ReactElement;
}

const Navbar:React.FC<INavbar> = ({ children }) => {
    const { user } = useUser();
  return (
    <div className="navbar">
      <h1>Rucode</h1>
      { children }
      <Link {...PROFILE(user.id)}>
        <div className="avatar" />
      </Link>
    </div>
  );
};

export default Navbar;