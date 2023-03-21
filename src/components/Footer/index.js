import * as React from "react";
import * as style from "./style.module.scss";

const Footer = () => {
  return <div className={style.footer}>© Elite {new Date().getFullYear()}</div>;
};

export default Footer;
