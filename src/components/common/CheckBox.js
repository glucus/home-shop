import React from 'react';

const CheckBox = (props) => {

  const handleChange = e => props.handleChange(e);
  const className = name => '' + name;
    
  return (
    <div className='checkbox-container'>
      <label className={className (props.className)}>
        {props.label}
      </label>
      <input type = "checkbox"
          name = {props.name}
          checked = {props.value}
          className = {className (props.className)}
          disabled = {props.disabled}
          onChange = {e => handleChange(e)}>
      </input>
  </div>
  );
};

export default CheckBox;

