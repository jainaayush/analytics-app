import React from "react";
import Dropdown from "../../common/Dropdown";

const Header = ({ title }) => {
  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  const [value, setValue] = React.useState("fruit");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="bg-white h-20 w-full pl-10 space-x-4 shadow position-relative header_main">
      <div className="d-flex align-items-center justify-content-between px-3">
        <h1 className="text-dark text-3xl m-0 ms-4 p-3 fw-bold">Analytics</h1>
        <h1 className="text-dark text-3xl m-0 p-3 fw-bold">{title}</h1>
        <div>
          {title === "Home" && (
            <Dropdown
              label="What do we eat?"
              options={options}
              value={value}
              onChange={handleChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
