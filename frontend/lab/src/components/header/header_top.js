import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/snail.png";
const Header_top = () => {
  return (
    <div className="header_top">
      <div className="top_left">
        <div className="left_logo">
          <Link to="/" className="logo">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="left_title">
          <div className="title_in">
            <a href="" className="in_link">
              SNAIL
            </a>
          </div>
          <div className="title_description">
            Новости из мира компьютерных и мобильных игр
          </div>
        </div>
      </div>
      <div className="top_right">
        <div className="right_addres">
          <div className="addres_ico"></div>
          <div className="addres_in">
            <div className="in_title">Разместить рекламу</div>
            <div className="in_description"></div>
            <div className="in_number">
              <a href="" className="number_cool">
                8 (000) 000-00-00
              </a>
              <a href="" className="number_cool">
                8 (000) 000-00-00
              </a>
            </div>
          </div>
        </div>
        <div className="right_button">
          <div className="button_left">
            <div className="left_box">
              <Link to="/login" className="left_title">
                ВОЙТИ
              </Link>
              <div className="title_ico"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_top;
