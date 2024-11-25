import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "../../Data/ev_data.json";

const RangeDistributionRadarChart = () => {
  const rangeData = () => {
    return Object.entries(data.rangeDistribution).map(([range, count]) => ({
      range: range,
      count: count,
    }));
  };

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 border border-gray-700 shadow-lg rounded-xl">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Range Distribution
      </h2>
      <ResponsiveContainer width="100%" height={400}>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="80%"
        data={rangeData()} //have to call the function, data expects an array
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="range" tick={{ fill: "#9ca3af", fontSize: 14, dy: 5.5 }} />
        <PolarRadiusAxis angle={30} domain={[0, 10000]} tick={{ fill: "#9ca3af", fontSize: 12, dx: 10 }}/>
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(31, 41, 55, 0.8)",
            borderColor: "#4B5563",
          }}
          itemStyle={{ color: "#E5E7EB" }}
        />
        <Radar
          name="Range Distribution"
          dataKey="count" // Refer to 'count' field in rangeData
          stroke="#33cc33"
          fill="#9fff80"
          fillOpacity={0.6}
        />
      </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RangeDistributionRadarChart;
