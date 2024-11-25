import { HelpCircle, Plus } from "lucide-react";
import SettingsCard from "./SettingsCard";
import { useState } from "react";

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: "/google.png",
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: "/facebook.svg",
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: "/x.png",
    },
  ]);

  return (
    <SettingsCard icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((item) => (
        <div key={item.id} className="flex items-center justify-between py-3">
          <div className="flex gap-1">
            <img
              src={item.icon}
              alt="Social Image"
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300">{item.name}</span>
          </div>

          <button
            className={`px-3 py-1 rounded ${
              item.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === item.id) {
                    return { ...acc, connected: !acc.connected }; //acc.connected because we need to change the latest state
                  }
                  return acc;
                })

                // Can also use this instead of the above function
                //   onClick={() => {
                // setConnectedAccounts(prevState =>
                //   prevState.map((acc) => {
                //     if (acc.id === item.id) {
                //       return { ...acc, connected: !acc.connected };
                //     }
                //     return acc;
                //   })
                // );
              );
            }}
          >
            {item.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}

      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" /> Add Account
      </button>
    </SettingsCard>
  );
};

export default ConnectedAccounts;
