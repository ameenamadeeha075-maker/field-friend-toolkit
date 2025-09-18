import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, RefreshCw, MapPin } from "lucide-react";

const MarketPrices = () => {
  const marketData = [
    {
      crop: "Rice",
      variety: "Basmati",
      price: 95.00,
      unit: "kg",
      change: 5.2,
      location: "Colombo",
      lastUpdated: "2 hours ago"
    },
    {
      crop: "Tomato",
      variety: "Local Red",
      price: 180.00,
      unit: "kg",
      change: -12.5,
      location: "Kandy",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Onion",
      variety: "Big Onion",
      price: 220.00,
      unit: "kg",
      change: 8.3,
      location: "Galle",
      lastUpdated: "3 hours ago"
    },
    {
      crop: "Carrot",
      variety: "Local",
      price: 160.00,
      unit: "kg",
      change: -3.1,
      location: "Nuwara Eliya",
      lastUpdated: "4 hours ago"
    },
    {
      crop: "Cabbage",
      variety: "Green",
      price: 85.00,
      unit: "kg",
      change: 15.7,
      location: "Badulla",
      lastUpdated: "2 hours ago"
    },
    {
      crop: "Potato",
      variety: "Local",
      price: 130.00,
      unit: "kg",
      change: 2.4,
      location: "Colombo",
      lastUpdated: "1 hour ago"
    },
    {
      crop: "Green Beans",
      variety: "French Beans",
      price: 350.00,
      unit: "kg",
      change: -8.9,
      location: "Kandy",
      lastUpdated: "5 hours ago"
    },
    {
      crop: "Brinjal",
      variety: "Purple Long",
      price: 120.00,
      unit: "kg",
      change: 6.8,
      location: "Matara",
      lastUpdated: "3 hours ago"
    }
  ];

  const getTrendIcon = (change: number) => {
    if (change > 0) {
      return <TrendingUp className="h-4 w-4 text-green-600" />;
    } else {
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    }
  };

  const getTrendColor = (change: number) => {
    if (change > 0) {
      return "text-green-600 bg-green-50 border-green-200";
    } else {
      return "text-red-500 bg-red-50 border-red-200";
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Market Prices
            </h1>
            <p className="text-muted-foreground">
              Real-time crop prices across Sri Lankan markets
            </p>
          </div>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Prices
          </Button>
        </div>

        {/* Market Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 mb-1">Trending Up</p>
                  <p className="text-2xl font-bold text-green-800">5 Crops</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-700 mb-1">Trending Down</p>
                  <p className="text-2xl font-bold text-red-800">3 Crops</p>
                </div>
                <TrendingDown className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-primary mb-1">Total Markets</p>
                  <p className="text-2xl font-bold text-primary">12 Cities</p>
                </div>
                <MapPin className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Table */}
        <Card>
          <CardHeader>
            <CardTitle>Current Market Prices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="grid gap-4">
                {marketData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-lg">{item.crop}</h3>
                        <Badge variant="outline" className="text-xs">
                          {item.variety}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                        <span>Updated {item.lastUpdated}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary mb-1">
                        Rs. {item.price.toFixed(2)}
                        <span className="text-sm font-normal text-muted-foreground">
                          /{item.unit}
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        {getTrendIcon(item.change)}
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getTrendColor(item.change)}`}
                        >
                          {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>AI Market Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Best Time to Sell</h4>
                <p className="text-sm text-green-700">
                  Cabbage prices are up 15.7% - consider selling your harvest this week for maximum profit.
                </p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Price Prediction</h4>
                <p className="text-sm text-blue-700">
                  Tomato prices expected to recover by 8-10% next week due to reduced supply from other regions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketPrices;