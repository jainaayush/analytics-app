import React from "react";
import BatteryGauge from "react-battery-gauge";

const BatteryStatus = ({ batteryStatus }) => {
  const customization = {
    batteryBody: {
      strokeWidth: 1,
      cornerRadius: 6,
      fill: 'none',
      strokeColor: '#111'
    },
    batteryCap: {
      fill: 'none',
      strokeWidth: 4,
      strokeColor: '#111',
      cornerRadius: 2,
      capToBodyRatio: 0.4
    },
    batteryMeter: {
      fill: 'green',
      lowBatteryValue: 15,
      lowBatteryFill: 'red',
      outerGap: 1,
      noOfCells: 10, // more than 1, will create cell battery
      interCellsGap: 1
    },
    readingText: {
      lightContrastColor: '#111',
      darkContrastColor: '#fff',
      lowBatteryColor: 'red',
      fontFamily: 'Helvetica',
      fontSize: 0,
      showPercentage: false
    },
    chargingFlash: {
      scale: undefined,
      fill: 'orange',
      animated: true,
      animationDuration: 1000
    },
  }
  return (
    <div className="text-center">
      <h5 className="mb-5 size-font">Battery(%)</h5>
      
      <BatteryGauge value={batteryStatus}  padding={2} aspectRatio={0.5} customization={customization} />
    </div>
  );
};

export default BatteryStatus;
