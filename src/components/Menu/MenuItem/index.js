import { Link } from "gatsby";
import T from "prop-types";
import * as React from "react";
import * as style from "./MenuItem.module.scss";

const MenuItem = ({ isActive, text, url }) => {
  return (
    <li className={isActive ? style.active : null}>
      <Link to={url}>{text}</Link>
    </li>
  );
};

MenuItem.propTypes = {
  isActive: T.bool,
  text: T.string.isRequired,
  url: T.string.isRequired,
};

export default MenuItem;
