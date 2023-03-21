import * as React from 'react';
import Button from './index';
const ButtonOutlined = ({ text, leftIcon }) => {
  return (
    <Button leftIcon={leftIcon} className={'button__outlined'} text={text} />
  );
};

export default ButtonOutlined;
