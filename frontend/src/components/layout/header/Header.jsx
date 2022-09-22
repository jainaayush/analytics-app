import React, { useEffect, useState } from "react";
import { getKegTrackerIdsAction } from "../../../redux/action/actions";
import { useDispatch } from 'react-redux';
import Dropdown from "../../common/Dropdown";
import { getKegTrackerIds } from "../../../services/api";

const Header = ({ title }) => {

  const dispatch = useDispatch();

  const [value, setValue] = React.useState("");
  const [kegOption, setKegOptionData] = useState([]);

  useEffect(() => {
    getKegTrackerIds().then((res) => {
      setKegOptionData(res.data.data);
      setValue(res.data.data[0]);
    });
     // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (value) {
      dispatch(getKegTrackerIdsAction(value));
    }
     // eslint-disable-next-line
  }, [value]);


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
              options={kegOption}
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
