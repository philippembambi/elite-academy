import T from 'prop-types';
import * as React from 'react';
import * as style from './RadioInput.module.scss';
const RadioInput = ({ label, name, multichoice }) => {
  const type = multichoice ? 'checkbox' : 'radio';
  return (
    <div className={style['form__control']}>
      <input name={name} type={type} />
      <label className={style['form__label']}>{label}</label>
    </div>
  );
};

RadioInput.propTypes = {
  label: T.string.isRequired,
};

export default RadioInput;
