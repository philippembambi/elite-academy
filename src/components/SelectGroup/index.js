import T from 'prop-types';
import * as React from 'react';
import * as style from './SelectGroup.module.scss';
const SelectGroup = ({ label, name, data, required }) => {
  return (
    <div className={style['form__group']}>
      <label className={style['form__label']}>
        {label} {required && <span className={style['required']}>*</span>}
      </label>
      <select
        required={required ? true : false}
        className={style['form__control']}
        name={name}
      >
        <option>-selectionner-</option>
        {data &&
          data.map((opt, i) => (
            <option key={`option-${i}`} value={opt.name}>
              {opt.label}
            </option>
          ))}
      </select>
    </div>
  );
};

SelectGroup.propTypes = {
  label: T.string.isRequired,
  name: T.string,
  data: T.array.isRequired,
};

export default SelectGroup;
