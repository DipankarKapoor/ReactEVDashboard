import { BarChart2, Users, TrendingUp, Settings, Menu } from "lucide-react";
import { useState, useEffect } from "react";
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
    icon: TrendingUp,
    color: "#3B82F6",
    href: "/vehicle-insights",
  },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState();

  // Close sidebar on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Tailwind's sm breakpoint is 640px
        setIsOpen(false);
      } else {
        setIsOpen(true); // Open sidebar on larger screens
      }
    };

    // Check screen size on load and on resize
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
