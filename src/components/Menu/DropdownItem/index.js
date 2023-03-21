import { Link, navigate } from "gatsby";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import T from "prop-types";
import * as React from "react";
import * as style from "../Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownItem = ({ isActive, text, links, url }) => {
  const listClickHandler = (url) => {
    navigate(url);
  };
  return (
    <li className={isActive ? style.menugroup__active : style.menugroup}>
      <Link to={url}>
        {text}
        <FontAwesomeIcon className={style.menu__icon} icon={faChevronDown} />
      </Link>
      <ul className={style.dropdown}>
        {links &&
          links.map((link, i) => {
            return (
              <li onClick={(e) => listClickHandler(link.url)} key={"link-" + i}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
      </ul>
    </li>
  );
};

DropdownItem.propTypes = {
  isActive: T.bool,
  text: T.string,
  links: T.array.isRequired,
  url: T.string.isRequired,
};

export default DropdownItem;
