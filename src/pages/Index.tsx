
import { Navigate } from "react-router-dom";

const Index = () => {
  // Instead of using useEffect for navigation, we'll use Navigate component
  return <Navigate to="/" replace />;
};

export default Index;
