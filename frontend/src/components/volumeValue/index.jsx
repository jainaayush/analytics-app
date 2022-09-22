import React from "react";

const Circle = ({ pct, color, size }) => {
  const circle = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const circleFill = {
    background: `linear-gradient(transparent ${100 - pct}%, ${color} ${
      100 - pct
    }%)`,
  };
  return (
    <div className="circle" style={circle}>
      <div className="circle-fill" style={circleFill} />
      <div className="circle-overlay" />
      <div className="circle-fill-text">{pct}%</div>
    </div>
  );
};

const Volume = ({volume}) => {
  return (
    <div className="text-center">
    <h5 className="mb-5 size-font">Volume (%)</h5>
        <Circle pct={volume} size={200} color={"orange"} />
    </div>
  );
};

export default Volume;
