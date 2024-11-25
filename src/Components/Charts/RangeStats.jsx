// Components/Charts/RangeStats.js
import data from '../../Data/ev_data.json';

const RangeStats = () => {
  const { averageRange, maxRange, minRange } = data.rangeStats;

  return (
    <div className="p-2  border-gray-700 shadow-lg rounded-xl lg:col-span-2">
      <div className="h-20">
      <p>Average Range: {averageRange.toFixed(2)} miles</p>
      <p>Maximum Range: {maxRange} miles</p>
      <p>Minimum Range: {minRange} miles</p>
    </div>
    </div>
  );
};

export default RangeStats;
