
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./chart.scss"

export default function Chart({ dataKey , data , title}) {

  

    return (
        <div className='chart'>
            <div className="chart-container">
                <h3 className="chart-title">
                   {title}
                </h3>
                <ResponsiveContainer width="100%" aspect={4}>
                    <LineChart
                        height={300}
                        data={data}
                    >
                        <XAxis dataKey={dataKey}></XAxis>
                        <Line type="monotone" dataKey="users"></Line>
                        <Tooltip></Tooltip>
                        {/* <YAxis></YAxis> */}
                        <CartesianGrid strokeDasharray="5 5"></CartesianGrid>
                        {/* <Legend></Legend> */}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

}
