import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const LinChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: '장난감매출',
                data: [11, 8, 22, 21, 26, 35],
                fill: false,
                borderColor: 'red',
                tension: 0.1
            },
            {
                label: '사료매출',
                data: [65, 59, 80, 41, 41, 65],
                fill: false,
                borderColor: 'blue',
                tension: 0.1
            },
            {
                label: '목욕용품매출',
                data: [31, 41, 22, 17, 56, 55],
                fill: false,
                borderColor: 'Green',
                tension: 0.1
            }
        ]
    };

    return <Line data={data} />;
};

export default LinChart