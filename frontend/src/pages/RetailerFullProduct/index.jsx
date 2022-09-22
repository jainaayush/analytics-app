import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getRetailerFullProductData } from "../../services/api";
import { colorSet } from "../../constant/index";

const ProductChart = () => {
  const [productChartData, setProductChartData] = useState([]);
  const [label, setlabel] = useState([]);
  const [chartColor, setChartColor] = useState([]);
  const [seriesValue, setSeriesValue] = useState("");

  useEffect(() => {
    getRetailerFullProductData().then((res) => {
      const color = res.data.data?.map((item, index) => {
        return { ...item, color: colorSet[index] };
      });

      const label = color.map((item) => item.label);
      const chartColor = color.map((item) => item.color);
      const series = color.map((item) => item.value);
      console.log("test", label);
      setlabel(label);
      setChartColor(chartColor);
      setSeriesValue(series);
      setProductChartData(color);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <div className="d-flex justify-content-between">
          <div className="w-100 mt-5 pt-5">
            {productChartData.map((item, index) => (
              <div key={index} className="d-flex align-items-center justify-content-between py-3 ms-3 border-bottom w-100">
                <div className="d-flex align-items-center">
                  <div className="chart_circle me-3" style={{background: item.color}}></div>
                  {item.label}
                </div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>
          
          <Chart
            type="donut"
            width={950}
            height={550}
            series={seriesValue}
            options={{
              colors: chartColor,
              labels: label,
              title: {
                text: "",
              },

              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        showAlways: true,
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
