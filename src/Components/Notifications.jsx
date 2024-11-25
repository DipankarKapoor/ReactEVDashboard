import { useState } from "react";
import SettingsCard from "./SettingsCard";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
  const [notifications, setNotifications] = useState({
    pushNotification: true,
    emailNotification: false,
    smsNotification: false,
  });

  return (
    // Returning the re-usable settings card
    <SettingsCard icon={Bell} title={"Notifications"}>
      {/* Notification Switches/buttons */}
      <ToggleSwitch
        Label={"Push Notifications"}
        isOn={notifications.pushNotification}
        onToggle={() => {
          setNotifications({
            ...notifications,
            pushNotification: !notifications.pushNotification,
          });
        }}
      />
      <ToggleSwitch
        Label={"Email Notifications"}
        isOn={notifications.emailNotification}
        onToggle={() => {
          setNotifications({
            ...notifications,
            emailNotification: !notifications.emailNotification,
          });
        }}
      />
      <ToggleSwitch
        Label={"SMS Notifications"}
        isOn={notifications.smsNotification}
        onToggle={() => {
          setNotifications({
            ...notifications,
            smsNotification: !notifications.smsNotification,
          });
        }}
      />
    </SettingsCard>
  );
};

export default Notifications;
