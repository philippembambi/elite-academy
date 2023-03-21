import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";
import T from "prop-types";
import * as React from "react";
import ButtonOulined from "./button-outlined";
import ButtonPrimary from "./button-primary";
import ButtonRounded from "./button-rounded";
import * as style from "./style.module.scss";
const Button = ({ text, className, leftIcon, rightIcon }) => {
  return (
    <button className={style[className ? className : "button__primary"]}>
      {leftIcon && <FontAwesomeIcon className={style.icon} icon={leftIcon} />}
      <span className={style.text}>{text}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
};

const ButtonLink = ({ text, className, leftIcon, rightIcon, url }) => {
  return (
    <Link to={url} className={style[className ? className : "button__primary"]}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      <span className="inline-block align-middle">{text}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </Link>
  );
};

ButtonLink.propTypes = {
  text: T.string.isRequired,
  className: T.string,
  IconComponent: T.any,
  url: T.string,
};

Button.propTypes = {
  text: T.string.isRequired,
  className: T.string,
  IconComponent: T.any,
};

export { ButtonLink, ButtonRounded, ButtonPrimary, ButtonOulined };

export default Button;
