
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8 text-center">
        <h1 className="text-8xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">This page doesn't exist.</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
