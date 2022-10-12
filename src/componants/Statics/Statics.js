import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statics = () => {
    const datas = useLoaderData();
    const { data } = datas;
    console.log(data);

    return (
        <div>
            <h2>This is Statics Recharts!!</h2>
            <div className="mt-24 text-teal-800 pb-72">
                <LineChart width={500} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#ff7300" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>

            </div>

        </div>
    );
};

export default Statics;