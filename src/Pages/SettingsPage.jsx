import Header from "../Components/Common/Header"
import Profile from "../Components/Profile"
import Notifications from "../Components/Notifications"
import SecuritySection from "../Components/SecuritySection"
import ConnectedAccounts from "../Components/ConnectedAccounts"
import DeleteAccount from "../Components/DeleteAccount"

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Settings" />
      <main className="max-w-4xl mx-auto py-6 px-4 lg:px-8">
      
      <Profile />
      <Notifications />
      <SecuritySection />
      <ConnectedAccounts />
      <DeleteAccount />
      </main>
    </div>
  )
}

export default SettingsPage
