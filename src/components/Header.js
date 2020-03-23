import React from "react";
import { FaReact } from "react-icons/fa";

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title"><FaReact size={32}/> {props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: "BoredAtHome"
};

export default Header;
