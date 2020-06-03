import React from 'react';
import { LineChart, Line, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

// @ts-ignore
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';

const CustomTooltip = (props: any) => {
    if (props.payload[0] != null) {
        const newPayload = [
            {
                name: 'Name',
                value: props.payload[0].payload.points,
            },
            ...props.payload,
        ];

        return <DefaultTooltipContent {...props} payload={newPayload} />;
    }

    return <DefaultTooltipContent {...props} />;
};

export default ({
    data
}: {
    data: []
}) => {

    return <div className="chart">
        <ResponsiveContainer height="99%">
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

