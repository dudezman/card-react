
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);
function TinyChart(){
    const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 205, 86)'
    ],
    spacing:2,
    hoverOffset: 4
  }]
};
    return(
        
<Doughnut data={data} style={{width:"56px"}} />
    );
}
export default TinyChart;