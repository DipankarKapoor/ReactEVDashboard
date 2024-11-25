// Components/Charts/ManufacturerBarChart.js
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

const ManufacturerBarChart = () => {
  const manufacturerData = Object.keys(data.manufacturerDistribution).map(
    (make) => ({
      make,
      count: data.manufacturerDistribution[make],
    })
  );

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 border border-gray-700 shadow-lg rounded-xl lg:col-span-2">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Manufacturer Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart
            width={600}
            height={300}
            data={manufacturerData}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="make" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="count" fill="#a64dff" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ManufacturerBarChart;
