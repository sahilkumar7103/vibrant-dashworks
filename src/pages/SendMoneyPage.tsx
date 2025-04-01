
import { useState } from "react";
import { ChevronLeft, Search, Users, QrCode, Plus, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactItem from "@/components/ContactItem";
import BottomNavigation from "@/components/BottomNavigation";
import { useToast } from "@/hooks/use-toast";

const SendMoneyPage = () => {
  const [amount, setAmount] = useState("");
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const { toast } = useToast();

  const contacts = [
    { id: "1", name: "Jessica Kim", image: "", frequent: true },
    { id: "2", name: "Michael Wong", image: "", frequent: true },
    { id: "3", name: "Sarah Johnson", image: "", frequent: false },
    { id: "4", name: "David Chen", image: "", frequent: false },
    { id: "5", name: "Emily Davis", image: "", frequent: true },
    { id: "6", name: "James Wilson", image: "", frequent: false },
    { id: "7", name: "Add New", image: "", frequent: false, isAdd: true },
  ];

  const handleSendMoney = () => {
    if (!amount || !selectedContact) {
      toast({
        title: "Error",
        description: "Please enter an amount and select a contact",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Money sent!",
      description: `$${amount} has been sent successfully`,
    });
    
    // Reset form
    setAmount("");
    setSelectedContact(null);
  };

  return (
    <div className="min-h-screen bg-lightGray pb-24">
      {/* Header */}
      <div className="bg-white pt-12 pb-5 shadow-sm">
        <div className="px-5">
          <div className="flex items-center mb-6">
            <Link to="/" className="mr-4">
              <ChevronLeft size={24} className="text-navy" />
            </Link>
            <h1 className="text-xl font-bold text-navy">Send Money</h1>
          </div>

          {/* Action Tabs */}
          <Tabs defaultValue="contacts" className="w-full">
            <TabsList className="grid grid-cols-3 bg-lightGray">
              <TabsTrigger value="contacts" className="data-[state=active]:bg-white data-[state=active]:text-teal">
                <Users size={16} className="mr-2" />
                Contacts
              </TabsTrigger>
              <TabsTrigger value="qrcode" className="data-[state=active]:bg-white data-[state=active]:text-teal">
                <QrCode size={16} className="mr-2" />
                QR Code
              </TabsTrigger>
              <TabsTrigger value="bank" className="data-[state=active]:bg-white data-[state=active]:text-teal">
                <CreditCard size={16} className="mr-2" />
                Bank
              </TabsTrigger>
            </TabsList>

            <TabsContent value="contacts" className="mt-4">
              <div className="relative mb-4">
                <Search size={18} className="absolute left-3 top-3 text-darkGray" />
                <Input
                  type="text"
                  placeholder="Search contacts"
                  className="pl-10 pr-4 py-2 rounded-xl border border-gray-200"
                />
              </div>

              {/* Frequent Contacts */}
              <div className="mb-5">
                <h3 className="text-sm font-medium text-darkGray mb-3">Frequent Contacts</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                  {contacts
                    .filter(contact => contact.frequent)
                    .map(contact => (
                      <ContactItem
                        key={contact.id}
                        name={contact.name}
                        image={contact.image}
                        isFrequent={true}
                        onSelect={() => setSelectedContact(contact.id)}
                      />
                    ))}
                </div>
              </div>

              {/* All Contacts */}
              <h3 className="text-sm font-medium text-darkGray mb-3">All Contacts</h3>
              <div className="bg-white rounded-2xl p-4 shadow-sm animate-slide-up">
                {contacts.map(contact => (
                  <div 
                    key={contact.id}
                    className={`flex items-center justify-between py-3 border-b border-gray-100 last:border-0 ${
                      selectedContact === contact.id ? "bg-lightGray rounded-xl px-2" : ""
                    }`}
                    onClick={() => {
                      if (!contact.isAdd) {
                        setSelectedContact(contact.id);
                      } else {
                        toast({
                          title: "Add Contact",
                          description: "This would open the add contact dialog",
                        });
                      }
                    }}
                  >
                    <div className="flex items-center">
                      {contact.isAdd ? (
                        <div className="w-10 h-10 rounded-full bg-lightGray flex items-center justify-center mr-4">
                          <Plus size={20} className="text-teal" />
                        </div>
                      ) : (
                        <Avatar className="w-10 h-10 mr-4 bg-teal text-white">
                          <div className="font-medium">
                            {contact.name
                              .split(" ")
                              .map(n => n[0])
                              .join("")
                              .substring(0, 2)}
                          </div>
                        </Avatar>
                      )}
                      <p className="font-medium text-navy">{contact.name}</p>
                    </div>
                    {selectedContact === contact.id && (
                      <div className="w-4 h-4 rounded-full bg-teal"></div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="qrcode">
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
                  <QrCode size={120} className="text-navy opacity-30" />
                </div>
                <p className="text-sm text-darkGray">Scan QR code to send money</p>
              </div>
            </TabsContent>

            <TabsContent value="bank">
              <div className="flex flex-col items-center justify-center py-10">
                <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300 mb-4">
                  <CreditCard size={120} className="text-navy opacity-30" />
                </div>
                <p className="text-sm text-darkGray">Enter bank account details</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Amount Input */}
      <div className="p-5 mt-3">
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-5">
          <p className="text-sm text-darkGray mb-2">Amount</p>
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl mr-2 text-navy">$</span>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
              placeholder="0.00"
              className="text-4xl font-bold text-navy bg-transparent border-none focus:outline-none text-center w-40"
            />
          </div>
          <div className="flex justify-center space-x-2">
            <Button 
              variant="outline" 
              className="text-teal border-teal"
              onClick={() => setAmount("10.00")}
            >
              $10
            </Button>
            <Button 
              variant="outline" 
              className="text-teal border-teal"
              onClick={() => setAmount("20.00")}
            >
              $20
            </Button>
            <Button 
              variant="outline" 
              className="text-teal border-teal"
              onClick={() => setAmount("50.00")}
            >
              $50
            </Button>
            <Button 
              variant="outline" 
              className="text-teal border-teal"
              onClick={() => setAmount("100.00")}
            >
              $100
            </Button>
          </div>
        </div>

        <Button 
          className="w-full bg-teal hover:bg-teal/90 text-white py-6"
          size="lg"
          onClick={handleSendMoney}
        >
          Send Money
        </Button>
      </div>

      <BottomNavigation activeRoute="/send" />
    </div>
  );
};

export default SendMoneyPage;
