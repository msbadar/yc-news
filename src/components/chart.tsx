import React from 'react';
import { LineChart, Line, YAxis } from 'recharts';

export default ({
    data
}: {
    data: []
}) => {
    return <div className="chart">
        <LineChart width={960} height={350} data={data}>
            <Line type="monotone" dataKey="totalPoint" />
            <YAxis dataKey="points" />
        </LineChart>
    </div>

}

