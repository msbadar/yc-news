import React from 'react';
import { LineChart, Line, YAxis, ResponsiveContainer, Tooltip } from 'recharts';


export default ({
    data,
    width = "99%",
    height = 350,
}: {
    width?: number | string,
    height?: number | string
    data: []
}) => {

    return <div className="chart">
        <ResponsiveContainer height={height} width={width}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Line type="monotone" dataKey="totalPoint" />
                <YAxis dataKey="points" />
                <Tooltip
                    content={(e: any) => {
                        if (e.active && e.payload != null && e.payload[0] != null) {
                            return (<div className="chart-tooltip">
                                <p> Id: {e.payload[0].payload["objectID"]} </p>
                                <p> Votes: {e.payload[0].payload["totalPoint"]}</p>
                            </div>);
                        }
                        else {
                            return "";
                        }
                    }}
                />
            </LineChart>
        </ResponsiveContainer>
    </div>

}

