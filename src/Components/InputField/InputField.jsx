// InputField.js
import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, value, onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
