
import { Avatar } from "@/components/ui/avatar";

interface ContactItemProps {
  name: string;
  image?: string;
  phone?: string;
  isFrequent?: boolean;
  onSelect: () => void;
}

const ContactItem = ({ name, image, phone, isFrequent, onSelect }: ContactItemProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2);

  return (
    <div 
      className="flex flex-col items-center p-2 cursor-pointer transition-transform hover:scale-105"
      onClick={onSelect}
    >
      <div className="relative mb-2">
        <Avatar className="w-14 h-14 border-2 border-white shadow">
          {image ? (
            <img src={image} alt={name} className="object-cover w-full h-full" />
          ) : (
            <div className="bg-teal text-white w-full h-full flex items-center justify-center text-lg font-medium">
              {initials}
            </div>
          )}
        </Avatar>
        {isFrequent && (
          <span className="absolute top-0 right-0 bg-success w-3 h-3 rounded-full"></span>
        )}
      </div>
      <span className="text-xs font-medium text-center">{name}</span>
    </div>
  );
};

export default ContactItem;
