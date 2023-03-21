import * as React from 'react';
import Button from './index';
const ButtonPrimary = ({ text, leftIcon }) => {
  return (
    <Button leftIcon={leftIcon} className={'button__primary'} text={text} />
  );
};

export default ButtonPrimary;
