import React from "react";
import Thermometer from "react-thermometer-component";

const ThermometerTemp = ({temperature}) => {
  return (
    <div className="text-center">
      <h5 className="mb-5 size-font">Temperature (C)</h5>
      <Thermometer
        theme="light"
        value={temperature}
        max="100"
        steps="3"
        format="°C"
        size="large"
        height="300"
      />
    </div>
  );
};

export default ThermometerTemp;
