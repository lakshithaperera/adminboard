import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    Total: 1400,
  },
  {
    name: "February",
    Total: 1700,
  },
  {
    name: "March",
    Total: 900,
  },
  {
    name: "April",
    Total: 1600,
  },
  {
    name: "May",
    Total: 700,
  },
  {
    name: "june",
    Total: 1900,
  }
];

export const Chart = () => {
  return (
    <div className="chart">
        <div className="title">Last 6 Month (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7451f8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7451f8" stopOpacity={0} />
            </linearGradient>
            
          </defs>
          <XAxis dataKey="name" />
          
          <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#7451f8"
            fillOpacity={1}
            fill="url(#Total)"
          />
         
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
