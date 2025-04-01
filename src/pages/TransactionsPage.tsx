
import { useState } from "react";
import { ChevronLeft, Calendar, Filter, Search, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionItem from "@/components/TransactionItem";
import BottomNavigation from "@/components/BottomNavigation";

const TransactionsPage = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const transactions = [
    { 
      id: 1, 
      type: "debit" as const, 
      name: "Starbucks Coffee", 
      date: "Today, 10:23 AM", 
      amount: "$5.40",
      category: "Food & Drinks" 
    },
    { 
      id: 2, 
      type: "credit" as const, 
      name: "Salary Deposit", 
      date: "Yesterday", 
      amount: "$2,450.00",
      category: "Income" 
    },
    { 
      id: 3, 
      type: "debit" as const, 
      name: "Amazon.com", 
      date: "Jun 15", 
      amount: "$67.50",
      category: "Shopping" 
    },
    { 
      id: 4, 
      type: "debit" as const, 
      name: "Netflix Subscription", 
      date: "Jun 12", 
      amount: "$12.99",
      category: "Entertainment" 
    },
    { 
      id: 5, 
      type: "credit" as const, 
      name: "Client Payment", 
      date: "Jun 10", 
      amount: "$750.00",
      category: "Income" 
    },
    { 
      id: 6, 
      type: "debit" as const, 
      name: "Uber Ride", 
      date: "Jun 8", 
      amount: "$24.15",
      category: "Transportation" 
    },
    { 
      id: 7, 
      type: "debit" as const, 
      name: "Apple Store", 
      date: "Jun 5", 
      amount: "$129.00",
      category: "Technology" 
    },
  ];

  // Filter transactions based on tab
  const filteredTransactions = currentTab === "all" 
    ? transactions 
    : transactions.filter(t => 
        currentTab === "income" ? t.type === "credit" : t.type === "debit"
      );

  return (
    <div className="min-h-screen bg-lightGray pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-4 shadow-sm">
        <div className="px-5">
          <div className="flex items-center mb-6">
            <Link to="/" className="mr-4">
              <ChevronLeft size={24} className="text-navy" />
            </Link>
            <h1 className="text-xl font-bold text-navy">Transaction History</h1>
          </div>

          {/* Search & Filter */}
          <div className="flex justify-between space-x-3 mb-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-3 text-darkGray" />
              <input 
                type="text" 
                placeholder="Search transactions" 
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-teal"
              />
            </div>
            <button className="bg-lightGray p-2 rounded-xl">
              <Filter size={20} className="text-darkGray" />
            </button>
            <button className="bg-lightGray p-2 rounded-xl">
              <Calendar size={20} className="text-darkGray" />
            </button>
          </div>

          {/* Tabs */}
          <Tabs 
            defaultValue="all" 
            onValueChange={setCurrentTab} 
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 bg-lightGray">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-teal">
                All
              </TabsTrigger>
              <TabsTrigger value="income" className="data-[state=active]:bg-white data-[state=active]:text-teal">
                Income
              </TabsTrigger>
              <TabsTrigger value="expenses" className="data-[state=active]:bg-white data-[state=active]:text-teal">
                Expenses
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Transaction List */}
      <div className="p-5">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                <ArrowDownLeft className="text-success" size={20} />
              </div>
              <span className="text-xs text-darkGray">This Month</span>
            </div>
            <p className="text-sm text-darkGray mt-3">Income</p>
            <p className="text-xl font-bold text-success">+$3,240.00</p>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                <ArrowUpRight className="text-danger" size={20} />
              </div>
              <span className="text-xs text-darkGray">This Month</span>
            </div>
            <p className="text-sm text-darkGray mt-3">Expenses</p>
            <p className="text-xl font-bold text-danger">-$1,726.35</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 animate-slide-up">
          <h3 className="text-sm font-medium text-darkGray mb-2">Recent</h3>
          
          {filteredTransactions.slice(0, 3).map((transaction) => (
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

        <div className="bg-white rounded-2xl p-4 shadow-sm animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-sm font-medium text-darkGray mb-2">Earlier</h3>
          
          {filteredTransactions.slice(3).map((transaction) => (
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
      </div>

      <BottomNavigation activeRoute="/transactions" />
    </div>
  );
};

export default TransactionsPage;
