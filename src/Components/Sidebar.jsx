import {
  BarChart2,
  Users,
  Car,
  // DollarSign,
  // ShoppingCart,
  TrendingUp,
  Settings,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  {
    name: "Vehicle Insights",
    icon: Car,
    color: "#8B5CF6",
    href: "/vehicle-insights",
  },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  // { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  // { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative z-10 transition-all duration-250 ease-in-out flex-shrink-0 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-gray-700">
        <button onClick={toggleSidebar}>
          {" "}
          <Menu size={24} />
        </button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <div className="flex items-center p-4 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon size={20} color={item.color} />
                <span
                  className={`ml-4 ${
                    isOpen ? "" : "hidden"
                  }  whitespace-nowrap`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
