// Components/Charts/CityDistributionBarChart.js

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import data from '../../Data/ev_data.json';

const cityData = Object.keys(data.cityDistribution).map(city => ({
  city : city,
  count: data.cityDistribution[city],
}));

const CityDistributionBarChart = () => {

  return (
    <div className="bg-gray-800 bg-opacity-50 backdrop-blur-md p-6 border border-gray-700 shadow-lg rounded-xl lg:col-span-2">
      <h2 className="text-lg font-medium mb-4 text-gray-100">EVs Distribution by City</h2>
      <div className="h-80">
      <ResponsiveContainer >
      <BarChart data={cityData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#4B5563"/>
        <XAxis dataKey="city" stroke="#9ca3af"/>
        <YAxis stroke="#9ca3af"/>
        <Tooltip contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}} itemStyle={{ color: "#E5E7EB" }}/>
        <Legend />
        <Bar dataKey="count" fill="#99ff99"  />
      </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CityDistributionBarChart;
