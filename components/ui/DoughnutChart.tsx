"use client";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement, Tooltip } from 'chart.js'
Chart.register(ArcElement, Tooltip);
export default function DoughnutChart({accounts}: DoughnutChartProps) {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(65, 105, 225)',
        'rgb(173, 216, 230)',
        'rgb(25, 25, 180)'
      ],
      hoverOffset: 4
    }]
  };

  return <Doughnut data={data} options={{cutout: '60%', plugins: {legend: {display:false}} }} />
}
