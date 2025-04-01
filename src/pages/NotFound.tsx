
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightGray p-5">
      <div className="text-center mb-10">
        <div className="relative w-28 h-28 bg-white rounded-full shadow-lg mx-auto mb-6 flex items-center justify-center">
          <span className="text-5xl font-bold text-teal">404</span>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-navy">Page Not Found</h1>
        <p className="text-darkGray mb-6">
          We couldn't find the page you're looking for.
        </p>
        <Link to="/">
          <Button className="bg-teal hover:bg-teal/90 text-white">
            <ChevronLeft size={18} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
