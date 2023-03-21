import T from 'prop-types';
import * as React from 'react';
import * as style from './RadioGroup.module.scss';
const RadioGroup = ({ label, children, required }) => {
  return (
    <div className={style['form__group']}>
      <label className={style['form__label']}>
        {label} {required && <span className={style['required']}>*</span>}
      </label>
      <div className={style['form__group_children']}>{children}</div>
    </div>
  );
};

RadioGroup.propTypes = {
  label: T.string.isRequired,
};

export default RadioGroup;
