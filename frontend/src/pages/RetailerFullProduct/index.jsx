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
        <div className="d-flex justify-content-between">
          <div className="w-100 mt-5 pt-5">
            <div className="d-flex align-items-center justify-content-between py-3 ms-3 border-bottom w-100">
              <div className="d-flex align-items-center">
                <div className="chart_circle me-3"></div>
                chart
              </div>
              <div>2</div>
            </div>
            <div className="d-flex align-items-center justify-content-between py-3 ms-3 border-bottom w-100">
              <div className="d-flex align-items-center">
                <div className="chart_circle me-3"></div>
                chart 1
              </div>
              <div>2</div>
            </div>
          </div>
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
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductChart;
