import React from "react";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="home_dropdown">
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;
