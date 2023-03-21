import T from 'prop-types';
import * as React from 'react';
import * as style from './TextInput.module.scss';
const TextInput = ({ label, name, placeholder, type, required }) => {
  return (
    <div className={style['form__group']}>
      <label className={style['form__label']}>
        {label}
        {required && <span className={style['required']}>*</span>}
      </label>
      <input
        required={required ? true : false}
        type={type ? type : 'text'}
        className={style['form__control']}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {
  label: T.string.isRequired,
  placeholder: T.string,
};

export default TextInput;
