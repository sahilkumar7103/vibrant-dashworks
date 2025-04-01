
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
    <div className="flex items-center justify-between py-3 border-b border-gray-100">
      <div className="flex items-center">
        <div 
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
            type === "credit" ? "bg-green-100" : "bg-red-100"
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
          <p className="text-xs text-darkGray">{date} • {category}</p>
        </div>
      </div>
      <p className={`font-semibold ${type === "credit" ? "text-success" : "text-danger"}`}>
        {type === "credit" ? "+" : "-"}{amount}
      </p>
    </div>
  );
};

export default TransactionItem;
