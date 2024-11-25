import { User } from "lucide-react";
import SettingsCard from "./SettingsCard.jsx";
const Profile = () => {
  return <SettingsCard icon={User} title={"Profile"}>
    {/* children for this wrapper component */}
    <div className="flex flex-col sm:flex-row items-center mb-6">
      <img src="/userProfile.svg" alt="Profile" className="rounded-full w-16 h-16 object-cover mr-4"/>

      <div>
        <h3 className="text-lg font-semibold text-gray-100">John Doe</h3>
        <p className="text-gray-400">john.doe@example.com</p>
      </div>
    </div>

    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition
     duration-200 w-full sm:w-auto">
      Edit Profile
    </button>
  </SettingsCard>;
};

export default Profile;