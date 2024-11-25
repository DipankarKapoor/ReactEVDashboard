// Components/Charts/MakeModelBarChart.js
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import data from "../../Data/ev_data.json";

const MakeModelBarChart = () => {
  const modelData = data.makeModelDistribution;
  //  console.log(modelData);
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 border border-gray-700 shadow-lg rounded-xl lg:col-span-2">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Make and Model Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={modelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis
              dataKey="Model"
              stroke="#9ca3af"
              interval={0}
              tick={{ fontSize: 10 }}
            />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              formatter={(value, name, props) => {
                const { payload } = props;
                return [`${value}`, `${payload.Make}`]; 
              }}
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="count" fill="#F59E0B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MakeModelBarChart;
