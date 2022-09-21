import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ProductChart = () => {
  const [contryname, setCountryname] = useState([]);
  const [medal, setMedal] = useState([]);

  useEffect(() => {

    
    getdata();
  }, []);

  const getdata = async () => {
    const countryname = [];
    const getmedal = [];

    const reqData = await fetch("http://localhost/reactgraphtutorial/medals");
    const resData = await reqData.json();
    for (let i = 0; i < resData.length; i++) {
      countryname.push(resData[i].country);
      getmedal.push(parseInt(resData[i].medals));
    }
    setCountryname(countryname);
    setMedal(getmedal);
  };

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <h2 className="text-left">Donut Chart</h2>
        <Chart
          type="donut"
          width={1000}
          height={550}
          series={[45, 67, 89, 34, 43]}
          options={{
            labels: ['USA', "china", "India", "Koria", "Russia"],
            title: {
              text: "Medal Country Name",
              // align:"center",
            },

            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      show: true,
                      showAlways: true,
                      //formatter: () => '343',
                      fontSize: 30,
                      color: "#f90000",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
        <div>
          <div></div>
          chart
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductChart;
