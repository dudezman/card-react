
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
    data: [200, 100],
    backgroundColor: [
      '#c57eea',
      '#31c1eb'
    ],
    spacing:0,
    hoverOffset: 1
  }]
};
    return(
        
<Doughnut data={data} style={{width:"30px"}} />
    );
}
export default TinyChart;