import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Top step types',
    },
  },
};

const labels = ['Calls', 'Email', 'Linkedin', 'In-person Visit', 'Others', 'SMS', 'Auto Send'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Positive Results',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(65, 179, 255, 1)',
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
