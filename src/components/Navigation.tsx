import { Button } from "@/components/ui/button";
import { Home, Camera, TrendingUp, ArrowLeft, Calendar } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  if (isHome) return null;

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          
          <h2 className="font-semibold text-lg">Smart Farm Assistant</h2>
          
          <div className="flex items-center gap-2">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"} 
              size="sm"
              onClick={() => navigate('/')}
            >
              <Home className="h-4 w-4" />
            </Button>
            <Button 
              variant={location.pathname === "/analyze" ? "default" : "ghost"} 
              size="sm"
              onClick={() => navigate('/analyze')}
            >
              <Camera className="h-4 w-4" />
            </Button>
            <Button 
              variant={location.pathname === "/market" ? "default" : "ghost"} 
              size="sm"
              onClick={() => navigate('/market')}
            >
              <TrendingUp className="h-4 w-4" />
            </Button>
            <Button 
              variant={location.pathname === "/calendar" ? "default" : "ghost"} 
              size="sm"
              onClick={() => navigate('/calendar')}
            >
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;