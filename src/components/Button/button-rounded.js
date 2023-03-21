import T from 'prop-types';
import * as React from 'react';
import { ButtonLink } from './index';
const ButtonRounded = ({ text, rightIcon, onClick, url }) => {
  return (
    <ButtonLink
      onClick={onClick}
      url={url}
      rightIcon={rightIcon}
      className={'button__rounded'}
      text={text}
    />
  );
};

ButtonRounded.propTypes = {
  text: T.string.isRequired,
  rightIcon: T.any,
  onClick: T.func,
};

export default ButtonRounded;
