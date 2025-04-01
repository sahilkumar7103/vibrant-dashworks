import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface BalanceCardProps {
  balance: string;
  cardName: string;
  cardNumber: string;
}

const BalanceCard = ({ balance, cardName, cardNumber }: BalanceCardProps) => {
  return (
    <div className="card-gradient from-blue-500 to-teal-400 rounded-2xl p-5 text-white shadow-lg mb-5 animate-scale-in">
      <div className="flex justify-between items-start mb-5">
        <div>
          <p className="text-sm opacity-80">Available Balance</p>
          <h2 className="text-3xl font-bold">{balance}</h2>
        </div>
        <div className="flex space-x-1">
          <div className="bg-white bg-opacity-20 rounded-full w-6 h-6"></div>
          <div className="bg-white bg-opacity-30 rounded-full w-6 h-6 -ml-3"></div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="text-xs opacity-70">Card Name</p>
          <p className="text-sm font-medium">{cardName}</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-70">Card Number</p>
          <p className="text-sm font-medium">{cardNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
