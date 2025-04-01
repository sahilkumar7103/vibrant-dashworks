
import { useState } from "react";
import { 
  Bell, 
  Search, 
  Send, 
  ArrowDownLeft, 
  QrCode, 
  CreditCard,
  BarChart,
  Receipt
} from "lucide-react";
import { Link } from "react-router-dom";
import BalanceCard from "@/components/BalanceCard";
import TransactionItem from "@/components/TransactionItem";
import QuickActionButton from "@/components/QuickActionButton";
import BottomNavigation from "@/components/BottomNavigation";

const HomePage = () => {
  const [notifications, setNotifications] = useState(3);

  const quickActions = [
    { icon: <Send size={24} />, label: "Send", action: () => {} },
    { icon: <ArrowDownLeft size={24} />, label: "Request", action: () => {} },
    { icon: <QrCode size={24} />, label: "Scan QR", action: () => {} },
    { icon: <CreditCard size={24} />, label: "Cards", action: () => {} }
  ];

  const recentTransactions = [
    { 
      id: 1, 
      type: "debit" as const, 
      name: "Starbucks Coffee", 
      date: "Today, 10:23 AM", 
      amount: "₹450",
      category: "Food & Drinks" 
    },
    { 
      id: 2, 
      type: "credit" as const, 
      name: "Salary Deposit", 
      date: "Yesterday", 
      amount: "₹2,45,000",
      category: "Income" 
    },
    { 
      id: 3, 
      type: "debit" as const, 
      name: "Amazon.com", 
      date: "Jun 15", 
      amount: "₹5,625",
      category: "Shopping" 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 pb-24">
      {/* Header */}
      <div className="bg-white/85 backdrop-blur-xl rounded-b-3xl shadow-md pt-12 pb-5">
        <div className="px-5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-darkGray font-medium">Good morning,</p>
              <h1 className="text-2xl font-bold text-navy">Sahil Kumar</h1>
            </div>
            <div className="flex space-x-3 items-center">
              <button className="bg-lightGray/70 backdrop-blur-sm p-2.5 rounded-full hover:bg-lightGray transition-colors">
                <Search size={20} className="text-darkGray" />
              </button>
              <div className="relative">
                <button className="bg-lightGray/70 backdrop-blur-sm p-2.5 rounded-full hover:bg-lightGray transition-colors">
                  <Bell size={20} className="text-darkGray" />
                </button>
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <BalanceCard 
            balance="₹10,00,000" 
            cardName="Sahil Kumar" 
            cardNumber="**** 1234" 
          />

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-3 py-4 mt-2">
            {quickActions.map((action, index) => (
              <QuickActionButton 
                key={index}
                icon={action.icon}
                label={action.label}
                onClick={action.action}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="p-5 mt-3 animate-slide-up">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-navy">Recent Transactions</h2>
          <Link to="/transactions" className="text-teal text-sm font-medium">See All</Link>
        </div>
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
          {recentTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              name={transaction.name}
              date={transaction.date}
              amount={transaction.amount}
              category={transaction.category}
            />
          ))}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-navy mb-4">Financial Overview</h2>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-sm flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-100/80 flex items-center justify-center mb-2 shadow-sm">
                <BarChart className="text-teal" size={24} />
              </div>
              <p className="text-xs text-darkGray font-medium">Analytics</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-orange-100/80 flex items-center justify-center mb-2 shadow-sm">
                <Receipt className="text-coral" size={24} />
              </div>
              <p className="text-xs text-darkGray font-medium">Bills</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-green-100/80 flex items-center justify-center mb-2 shadow-sm">
                <CreditCard className="text-success" size={24} />
              </div>
              <p className="text-xs text-darkGray font-medium">Budget</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation activeRoute="/" />
    </div>
  );
};

export default HomePage;
