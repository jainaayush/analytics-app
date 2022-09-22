import React from "react";

const Dropdown = ({ value, options, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="home_dropdown">
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
