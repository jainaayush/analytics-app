import React, { useEffect, useState } from "react";
import Loader from "../../components/common/Loader";

// import component
import BatteryStatus from "../../components/BatteryStatus";
import Map from "../../components/googleMap";
import ThermometerTemp from "../../components/Temperature/index";
import Volume from "../../components/volumeValue/";
import { getKegTrackerDetails } from "../../services/api";
import { useSelector } from "react-redux";

const Home = () => {
  const currentProductKegId = useSelector((state) => state.data.kegId);

  const [getDetails, setDetails] = useState("");

  useEffect(() => {
    if (currentProductKegId) {
      getKegTrackerDetails(currentProductKegId).then((res) => {
        setDetails(res.data.data);
      });
    }
    // eslint-disable-next-line
  }, [currentProductKegId]);
  var options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <div>
      {getDetails ? (
        <>
          <div className="d-flex justify-content-around mt-5 align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <ThermometerTemp temperature={getDetails.temperature} />{" "}
              <div className="d-flex temp-wraper">
                <span className="thermometer-tax">
                  {getDetails.temperature}°C
                </span>
                <p className="temp-date">
                  Last updated{" "}
                  {new Date(getDetails.statusTime * 1000).toLocaleDateString(
                    "en-US",
                    options
                  )}
                </p>
              </div>
            </div>
            <Volume volume={getDetails?.volume} />

            <BatteryStatus batteryStatus={getDetails?.battery} />
          </div>

          <div className="mt-4 p-5">
            <h3 className="text-center mb-5 mt-5">Location of the device</h3>
            <div className="text-center mb-1 mt-5">latitude, longitude</div>
            <Map
              lat={parseFloat(getDetails?.latitude)}
              lng={parseFloat(getDetails?.longitude)}
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
