import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2';
import {numeral} from 'numeral';

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format('+0,0');
            },
        },
    },
    scales: {
        xAxes: [{
          type: 'time',
          time: {
              format: 'MM/DD/YY',
              tooltipItem: 'll'
          },
        }
    ],
        yAxes: [
            {
          gridLines: {
            display: true
          }, 
          tickes: {
              callbacks: function(value, index, values) {
                  return numeral(value).format('0a');
              },
          },
        }
        ],
      }
}
function LineGraph({casesType = 'cases'}) {
    const [data, setData] = useState({});

    const buildChartData = (data, casesType = 'cases') => {
        const chartData = [];
        let lastDataPoint;

        for(let date in data.cases){
            if(lastDataPoint) {
                let newDataPoint = {
                    x: date,
                    y: data[casesType][date]- lastDataPoint
                }
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        };
        return chartData;
    }

    useEffect(() => {
        const fetchData = async () => {
           await fetch('https://corona.lmao.ninja/v3/covid-19/historical/all?lastdays=120')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let chartData = buildChartData(data, 'cases');
                setData(chartData);
            }) 
        }
        fetchData();
    }, [casesType]);

    return (
        <div>
            {data?.length > 0 && (
                <Line data={{
                datasets: [
                    {
                        backgroundColor: "rgba(204, 16, 52, 0.5)",
                        borderColor: "#CC1034",
                        data: data
                    }
                ]
            }} 
             option={options} />  
            )}        
        </div>
    )
}

export default LineGraph
