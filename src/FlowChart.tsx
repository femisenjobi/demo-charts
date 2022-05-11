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
      text: 'Top Flows',
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Flow 1', 'Flow 2', 'Flow 3', 'Flow 4', 'Flow 5', 'Flow 6', 'Flow 7'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Completed',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(65, 179, 255, 1)',
      backgroundColor: 'rgba(65, 179, 255, 1)',
    },
    {
      label: 'Exited',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(221, 55, 48, 1)',
      backgroundColor: 'rgba(221, 55, 48, 1)',
    },
    {
      label: 'Success',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgba(76, 175, 80, 1)',
      backgroundColor: 'rgba(76, 175, 80, 1)',
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
