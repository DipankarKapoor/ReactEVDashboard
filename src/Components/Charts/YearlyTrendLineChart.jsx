// Components/Charts/YearlyTrendLineChart.js
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import data from "../../Data/ev_data.json";

const YearlyTrendLineChart = () => {
  // Extract yearly trend data
  const yearlyData = Object.keys(data.yearlyTrend).map((year) => ({
    year: year,
    count: data.yearlyTrend[year],
  }));

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 border border-gray-700 shadow-lg rounded-xl">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Yearly EV Adoption Trend
      </h2>
      <div className="h-80">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={yearlyData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
          <XAxis dataKey="year" />
          <YAxis stroke="#9ca3af"/>
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#10B981" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyTrendLineChart;
