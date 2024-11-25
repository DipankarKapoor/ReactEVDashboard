import { Routes, Route } from "react-router-dom";
import VehicleInsightsPage from "./Pages/VehicleInsightsPage";
import OverviewPage from "./Pages/OverviewPage";
import Sidebar from "./Components/Sidebar";
import UsersPage from "./Pages/UsersPage";
import SettingsPage from "./Pages/SettingsPage";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>

        {/* Sidebar */}
        <Sidebar />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/vehicle-insights" element={<VehicleInsightsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
