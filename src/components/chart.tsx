
import React from 'react';
import { LineChart, Line, YAxis} from 'recharts';


export default ({
    data
}: {
    data: []
}) => {


    return (<LineChart width={960} height={350} data={data}>
        <Line type="monotone" dataKey="totalPoint" />
        {/* <XAxis dataKey="objectID" /> */}
        {/* <Tooltip label="Id" content={(t:any) => JSON.stringify(t.payload[0] )} /> */}
        <YAxis dataKey="points" />
    </LineChart>
    )
}

{/* <Tooltip label="Id" content={(t: any) => t.payload && t.payload[0] && t.payload[0].points} /> */ }
