
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface BalanceCardProps {
  balance: string;
  cardName: string;
  cardNumber: string;
}

const BalanceCard = ({ balance, cardName, cardNumber }: BalanceCardProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl mb-5 animate-scale-in relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-16 -translate-x-16"></div>
      
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <p className="text-sm text-blue-100">Available Balance</p>
          <h2 className="text-3xl font-bold mt-1 tracking-tight">{balance}</h2>
        </div>
        <div className="flex space-x-1">
          <div className="bg-white bg-opacity-20 rounded-full w-7 h-7 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white bg-opacity-60 rounded-full w-5 h-5"></div>
          </div>
          <div className="bg-white bg-opacity-30 rounded-full w-7 h-7 -ml-3 backdrop-blur-sm"></div>
        </div>
      </div>
      <div className="flex justify-between items-end relative z-10">
        <div>
          <p className="text-xs text-blue-200">Card Name</p>
          <p className="text-sm font-medium">{cardName}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-blue-200">Card Number</p>
          <p className="text-sm font-medium">{cardNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
