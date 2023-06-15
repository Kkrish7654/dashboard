import React, { Fragment, useState } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const ChartGraph = () => {
  const [state, setState] = useState({
    options: {
      charts: {
        id: "line-chart",
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
    },

    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 10, 60, 34, 81, 10],
      },
      {
        name: "series-2",
        data: [10, 60, 35, 70, 20, 14, 11, 80],
      },
      {
        name: "series-3",
        data: [90, 10, 45, 15, 60, 14, 31, 40],
      },
    ],
  });
  return (
    <Fragment>
      <section className="flex bg-white mt-4 p-6 rounded w-full h-auto shadow-md">
        <div className="w-[70%]">
          <h6>Viewership Installs & Signups Graph</h6>
          {typeof window !== "undefined" && (
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="100%"
            />
          )}
        </div>
        <div className="flex flex-col items-center justify-start mt-4 p-2 w-[40%]">
          <div className="flex items-center gap-4">
            <img src="./apple.png" alt="icon"/>
            <img src="./android.png" alt="icon"/>
            <h4>102</h4>
          </div>
          <div className="flex flex-col  gap-2 mt-2 items-center">
            <p className="text-sm " style={{fontWeight:'200', color:'#878787'}}>Installs This Month</p>
            <button className="px-4  mt-1 py-2 rounded-md  bg-transparent" style={{border:'1px solid #D3D3D3'}}>
                <p className="text-xs">See All Customers</p>
            </button>
            <h6 className=" mt-6 text-sm font-bold">Currencies Vs Commodities</h6>
          </div>
          <div className="flex gap-8 mt-4">
            <i>
                <img className="w-12" src="./exchange.png" alt="icon"/>
                <span>7k</span>
                <p>Clicks</p>
            </i>
            <i>
                <img className="w-12" src="./gold.png" alt="icon"/>
                <span>10.6k</span>
                <p>Clicks</p>
            </i>
          </div>
          
        </div>
      </section>
    </Fragment>
  );
};
