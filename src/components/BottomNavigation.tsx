
import { Home, BarChart3, Send, CreditCard, User } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  active: boolean;
}

interface BottomNavigationProps {
  activeRoute: string;
}

const BottomNavigation = ({ activeRoute }: BottomNavigationProps) => {
  const navItems: NavItem[] = [
    {
      icon: <Home size={24} />,
      label: "Home",
      path: "/",
      active: activeRoute === "/"
    },
    {
      icon: <BarChart3 size={24} />,
      label: "Activity",
      path: "/transactions",
      active: activeRoute === "/transactions"
    },
    {
      icon: <Send size={24} />,
      label: "Send",
      path: "/send",
      active: activeRoute === "/send"
    },
    {
      icon: <CreditCard size={24} />,
      label: "Cards",
      path: "/cards",
      active: activeRoute === "/cards"
    },
    {
      icon: <User size={24} />,
      label: "Profile",
      path: "/profile",
      active: activeRoute === "/profile"
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pt-2 pb-6 px-4 shadow-lg rounded-t-3xl z-10">
      <div className="flex justify-between max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`menu-item ${item.active ? "active" : ""}`}
          >
            <div className={`${item.active ? "text-teal" : "text-darkGray"}`}>
              {item.icon}
            </div>
            <span className={`text-xs mt-1 ${item.active ? "text-teal font-medium" : "text-darkGray"}`}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
