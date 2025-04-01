
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface TransactionItemProps {
  type: "credit" | "debit";
  name: string;
  date: string;
  amount: string;
  category?: string;
}

const TransactionItem = ({ type, name, date, amount, category }: TransactionItemProps) => {
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-gray-100 hover:bg-gray-50/30 px-2 rounded-lg transition-colors">
      <div className="flex items-center">
        <div 
          className={`w-11 h-11 rounded-full flex items-center justify-center mr-4 shadow-sm ${
            type === "credit" ? "bg-green-100/80" : "bg-red-100/80"
          }`}
        >
          {type === "credit" ? (
            <ArrowDownLeft className="text-success" size={20} />
          ) : (
            <ArrowUpRight className="text-danger" size={20} />
          )}
        </div>
        <div>
          <p className="font-medium text-navy">{name}</p>
          <p className="text-xs text-darkGray mt-0.5">{date} • <span className="opacity-80">{category}</span></p>
        </div>
      </div>
      <p className={`font-semibold ${type === "credit" ? "text-success" : "text-danger"}`}>
        {type === "credit" ? "+" : "-"}{amount}
      </p>
    </div>
  );
};

export default TransactionItem;
