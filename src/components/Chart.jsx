import React from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js';
import {Line} from 'react-chartjs-2';


ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
)

const Chart = () => {
    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      }

     var options = {
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend: {
            labels: {
                fontSize: 26
            }
        }
      }

  return (
    <div>
        <Line 
            data={data}
            height={200}
            options={options}
        />

    </div>
  )
}

export default Chart