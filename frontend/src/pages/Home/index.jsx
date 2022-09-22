import React, { useEffect, useState } from "react";
// import Loader from "../../components/common/Loader";

// import component
import BatteryStatus from "../../components/BatteryStatus";
import Map from "../../components/googleMap";
import ThermometerTemp from "../../components/Temperature/index";
import Volume from "../../components/volumeValue/";
import { getKegTrackerDetails } from "../../services/api";
import { useSelector } from 'react-redux';

const Home = () => {

  const currentProductKegId = useSelector(state => state.data.kegId);
  
  const [getDetails, setDetails] = useState("");

  

  // console.log("=====---0currentUserKegID", currentProductKegId);



  useEffect(() => {
    if (currentProductKegId) {
      getKegTrackerDetails(currentProductKegId).then((res) => {
        setDetails(res.data.data);
      });
    }
  }, [currentProductKegId]);


  return (
    <div>
      {console.log("getDetails", getDetails)}
      <div className="d-flex justify-content-around mt-5 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <ThermometerTemp temperature={getDetails.temperature} /> <div className="thermometer-tax">{getDetails.temperature}°C</div>
        </div>
        <Volume volume={getDetails?.volume} />
        <BatteryStatus batteryStatus={getDetails?.battery} />
      </div>

      <div className="mt-4">
        <h3 className="text-center mb-5 mt-5">Location of the device</h3>
        <div className="text-center mb-1 mt-5">latitude, longitude</div>
        <Map
          lat={parseFloat(getDetails?.latitude)}
          lng={parseFloat(getDetails?.longitude)}
        />
      </div>
    </div>
  );
};

export default Home;
