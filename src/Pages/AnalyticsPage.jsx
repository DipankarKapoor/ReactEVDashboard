import Header from "../Components/Common/Header";
import MakeModelBarChart from "../Components/Charts/MakeModelBarChart";
const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Analytics" />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      
        {/* CHARTS */}
       <MakeModelBarChart />
      </main>
    </div>
  );
};

export default AnalyticsPage;
