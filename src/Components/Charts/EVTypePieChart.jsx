import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import data from "../../Data/ev_data.json";


  const colors = ["#6366F1", "#8B5CF6"];
  const evTypes = Object.keys(data.vehicleTypes).map((type, index) => ({
    name: type,
    value: data.vehicleTypes[type],
    fill: colors[index],
  }));
const EVTypePieChart = () => {
  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 border border-gray-700 shadow-lg rounded-xl">
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        EV Category Distribution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={evTypes}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
            >
              {evTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EVTypePieChart;
