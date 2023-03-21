import { StaticImage } from 'gatsby-plugin-image';
import T from 'prop-types';
import * as React from 'react';
import logo from "../../assets/images/logo.png"

const Logo = ({ className }) => {
  return (
    <img src={ logo } className={className} style={{ objectFit: "contain" }}/>
  );
};

Logo.propTypes = {
  className: T.string,
};

export default Logo;
