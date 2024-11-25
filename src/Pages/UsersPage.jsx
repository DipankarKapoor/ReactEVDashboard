import { UsersIcon, UserPlus, UserCheck, UserX } from "lucide-react"
import ev_data from "../Data/ev_data.json";
import Header from "../Components/Common/Header"
import StatCard from "../Components/StatCard"
import UserTable from "../Components/Charts/UserTable";

const usersObject = ev_data.userStats;
const {totalUsers, newUsersLastMonth, activeUsers, churnRate} =usersObject
const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-8">
          <StatCard
            name="Total Users"
            value={totalUsers}
            color={"#6366f1"}
            icon={UsersIcon}
            
          />
          <StatCard
            name="New Adopters Last Month"
            value={newUsersLastMonth}
            color={"#8B5CF6"}
            icon={UserPlus}
          />
          <StatCard
            name="Active Users"
            value={activeUsers}
            color={"#EC4899"}
            icon={UserCheck}
          />
          <StatCard
            name="Churn Rate"
            value={churnRate}
            color={"#10B981"}
            icon={UserX}
          />
        </div>

        <UserTable />
      </main>
    </div>
  )
}

export default UsersPage
