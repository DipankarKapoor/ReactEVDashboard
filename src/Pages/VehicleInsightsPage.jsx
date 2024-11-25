import Header from "../Components/Common/Header"
import { ChartNoAxesCombined } from "lucide-react"
import StatCard from "../Components/StatCard"
import RangeStats from "../Components/Charts/RangeStats"
import RangeDistributionRadarChart from "../Components/Charts/RangeDistributionRadarChart"
import ManufacturerBarChart from "../Components/Charts/ManufacturerBarChart"
import MakeModelBarChart from "../Components/Charts/MakeModelBarChart";

const VehicleInsightsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Vehicle Insights" />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mb-8">
          <StatCard
            name="Range Statistics"
            value={<RangeStats />}
            color={"#6366f1"}
            icon={ChartNoAxesCombined}
            className="h-48" 
          />
          <RangeDistributionRadarChart />
        </div>

        {/* CHARTS */}
      <ManufacturerBarChart />
      <MakeModelBarChart />
      </main>
    </div>
  )
}

export default VehicleInsightsPage
