import React from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Colors} from 'chart.js';
import {Line} from 'react-chartjs-2';



ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Colors
)

const Chart = () => {
    var data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 7, 3],
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
        },
        plugins: {
            colors: {
              enabled: true  
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