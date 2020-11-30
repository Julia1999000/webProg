import React from "react";
import { Link } from "react-router-dom";

const Header_menu = () => {
  return (
    <div className="header_menu">
      <ul className="menu_in">
        <li className="in_after">
          <a href="/" className="after_in">
            Главная
          </a>
          <Link to="/about" className="after_in">
            О нас
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header_menu;
