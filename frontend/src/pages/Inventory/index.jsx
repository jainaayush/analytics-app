import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import InventoryTable from "../../components/InventoryTable";
import { getInventoryData, getInventoryTypesData } from "../../services/api";
import { colorSet } from "../../constant/index";

const Inventory = () => {
  const [type, setType] = useState([]);
  const [inventoryTableData, setInventoryTableData] = useState([]);
  const [allInventoryTableData, setAllInventoryTableData] = useState([]);

  useEffect(() => {
    getInventoryData().then((res) => {
      if (res.status === 200) {
        setInventoryTableData(res.data.message);
        setAllInventoryTableData(res.data.message);
      }
    });

    getInventoryTypesData().then((res) => {
      const color = res.data.data?.map((item, index) => {
        return { ...item, color: colorSet[index] };
      });
      setType(color);
    });
    // eslint-disable-next-line
  }, []);

  const handleClick = (item) => {
    const filterResult = allInventoryTableData.filter((row) => row.Type === item.name);
    setInventoryTableData(filterResult);
  };

  useEffect(() => {
    if (type) {
      let tablecolor = inventoryTableData.map((item) => {
        const tableColorMatch = type.find((type) => item.Type === type.name);
        if (tableColorMatch) {
          return { ...item, color: tableColorMatch.color };
        } else {
          return null;
        }
      });
      setInventoryTableData(tablecolor);
      setAllInventoryTableData(tablecolor);
    }
    // eslint-disable-next-line
  }, [type]);

  const handleReset = () => {
    setInventoryTableData(allInventoryTableData);
  };

  return (
    <div>
      <div className="reset-btn-wrapper">
        <button
          onClick={() => handleReset()}
          className="btn btn-primary reset-btn mt-5 mr-3"
        >
          Reset <FaIcons.FaRedoAlt />
        </button>
      </div>
      <div className="d-flex mb-5 main-box">
        {type.map((item, index) => (
          <div
            key={index}
            style={{ background: item.color, width: item.count + "%" }}
            onClick={() => handleClick(item)}
          ></div>
        ))}
      </div>

      <div className="d-flex justify-content-around mb-5">
        {type.map((item, index) => (
          <div
            key={index}
            className="d-flex mouse"
            onClick={() => handleClick(item)}
          >
            <div className="box" style={{ background: item.color }}></div>
            <span className="pl-2"> {item.name} </span>
          </div>
        ))}
      </div>
      <div className="mt-5 p-4">
        <InventoryTable inventoryTableData={inventoryTableData} />
      </div>
    </div>
  );
};

export default Inventory;
