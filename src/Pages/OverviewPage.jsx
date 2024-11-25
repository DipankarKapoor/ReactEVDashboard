import { Sigma, Zap, BatteryFull, PlugZap } from "lucide-react";
import Header from "../Components/Common/Header";
import StatCard from "../Components/StatCard";
import ev_data from "../Data/ev_data.json";
import YearlyTrendLineChart from "../Components/Charts/YearlyTrendLineChart";
import EVTypePieChart from "../Components/Charts/EVTypePieChart";
import CityDistributionBarChart from "../Components/Charts/CityDistributionBarChart";

function totalEVs() {
  let evObject = ev_data.manufacturerDistribution;
  const totalVehicles = Object.values(evObject).reduce(
    (total, num) => total + num,
    0
  );
  return totalVehicles;
}

const avgRange = Math.floor(ev_data.rangeStats.averageRange);
const BEV = ev_data.vehicleTypes["Battery Electric Vehicle (BEV)"];
const PHEV = ev_data.vehicleTypes["Plug-in Hybrid Electric Vehicle (PHEV)"];
const OverviewPage = () => {

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
          <StatCard
            name="Total EVs"
            value={totalEVs()}
            color={"#6366f1"}
            icon={Zap}
            
          />
          <StatCard
            name="Average Range"
            value={avgRange}
            color={"#8B5CF6"}
            icon={Sigma}
          />
          <StatCard
            name="Battery Electric Vehicles"
            value={BEV}
            color={"#EC4899"}
            icon={BatteryFull}
          />
          <StatCard
            name="Plug-in Hybrid Electric Vehicles"
            value={PHEV}
            color={"#10B981"}
            icon={PlugZap}
          />
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <YearlyTrendLineChart/>
         <EVTypePieChart/>
         <CityDistributionBarChart/>
        </div>

      </main>
    </div>
  );
};

export default OverviewPage;
