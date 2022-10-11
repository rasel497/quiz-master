import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const QuizMarks = () => {
    const data = [
        {
            name: "Page A",
            marks: 590,
            quiz: 800,
            amt: 1400,
            cnt: 490
        },
        {
            name: "Page B",
            marks: 868,
            quiz: 967,
            amt: 1506,
            cnt: 590
        },
        {
            name: "Page C",
            marks: 1397,
            quiz: 1098,
            amt: 989,
            cnt: 350
        },
        {
            name: "Page D",
            marks: 1480,
            quiz: 1200,
            amt: 1228,
            cnt: 480
        },
        {
            name: "Page E",
            marks: 1520,
            quiz: 1108,
            amt: 1100,
            cnt: 460
        },
        {
            name: "Page F",
            marks: 1400,
            quiz: 680,
            amt: 1700,
            cnt: 380
        }
    ];


    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>

        </div>
    );
};

export default QuizMarks;