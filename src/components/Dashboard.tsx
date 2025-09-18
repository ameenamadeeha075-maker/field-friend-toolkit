import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Droplets, Thermometer, Camera, TrendingUp, Calendar, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/farm-hero.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const weatherData = {
    temperature: "28°C",
    humidity: "65%",
    rainfall: "12mm",
    condition: "Partly Cloudy"
  };

  const todaysTips = [
    "Early morning is best for watering tomatoes",
    "Check for aphids on your pepper plants",
    "Perfect weather for harvesting rice today"
  ];

  const marketHighlights = [
    { crop: "Rice", price: "Rs. 95/kg", trend: "up" },
    { crop: "Tomato", price: "Rs. 180/kg", trend: "down" },
    { crop: "Onion", price: "Rs. 220/kg", trend: "up" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img 
          src={heroImage} 
          alt="Agricultural landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Smart Farming Assistant
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              AI-powered insights for better crop management
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => navigate('/analyze')}
            >
              <Camera className="mr-2 h-5 w-5" />
              Analyze Crop Photo
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Weather & Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Cloud className="mr-2 h-5 w-5 text-primary" />
                Today's Weather
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <Thermometer className="mr-1 h-4 w-4" />
                    Temperature
                  </span>
                  <span className="font-semibold">{weatherData.temperature}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-sm">
                    <Droplets className="mr-1 h-4 w-4" />
                    Humidity
                  </span>
                  <span className="font-semibold">{weatherData.humidity}</span>
                </div>
                <Badge variant="secondary" className="w-full justify-center mt-3">
                  {weatherData.condition}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <Leaf className="mr-2 h-5 w-5 text-primary" />
                Today's Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {todaysTips.map((tip, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Market Prices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {marketHighlights.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.crop}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{item.price}</span>
                      <TrendingUp className={`h-3 w-3 ${item.trend === 'up' ? 'text-green-600' : 'text-red-500'} ${item.trend === 'down' ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2" 
            size="lg"
            onClick={() => navigate('/analyze')}
          >
            <Camera className="h-6 w-6" />
            <span>Analyze Crop</span>
          </Button>
          <Button 
            variant="outline" 
            className="h-20 flex-col gap-2" 
            size="lg"
            onClick={() => navigate('/market')}
          >
            <TrendingUp className="h-6 w-6" />
            <span>Market Prices</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
            <Calendar className="h-6 w-6" />
            <span>Crop Calendar</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col gap-2" size="lg">
            <Droplets className="h-6 w-6" />
            <span>Watering Guide</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;