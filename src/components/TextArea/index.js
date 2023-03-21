import * as React from 'react';
import * as style from './TextArea.module.scss';

const TextArea = ({ label, name, placeholder, required }) => {
  return (
    <div className={style['form__group']}>
      <label className={style['form__label']}>
        {label}
        {required && <span className={style['required']}>*</span>}
      </label>
      <textarea cols={20} name={name} className={style.form__control}>
        {placeholder}
      </textarea>
    </div>
  );
};

export default TextArea;
