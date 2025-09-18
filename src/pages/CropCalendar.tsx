import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Droplets, Zap, Scissors, Bug } from "lucide-react";

const CropCalendar = () => {
  const weeklyActivities = [
    {
      day: "Monday",
      date: "Jan 15",
      activities: [
        { type: "watering", task: "Water tomatoes", icon: Droplets, color: "bg-blue-500" },
        { type: "fertilizer", task: "Apply NPK to peppers", icon: Zap, color: "bg-green-500" }
      ]
    },
    {
      day: "Tuesday", 
      date: "Jan 16",
      activities: [
        { type: "pest-check", task: "Check for aphids", icon: Bug, color: "bg-orange-500" }
      ]
    },
    {
      day: "Wednesday",
      date: "Jan 17", 
      activities: [
        { type: "watering", task: "Water cucumber plants", icon: Droplets, color: "bg-blue-500" },
        { type: "harvest", task: "Harvest mature beans", icon: Scissors, color: "bg-purple-500" }
      ]
    },
    {
      day: "Thursday",
      date: "Jan 18",
      activities: [
        { type: "fertilizer", task: "Organic compost for carrots", icon: Zap, color: "bg-green-500" }
      ]
    },
    {
      day: "Friday", 
      date: "Jan 19",
      activities: [
        { type: "pest-check", task: "Spray neem oil", icon: Bug, color: "bg-orange-500" },
        { type: "watering", task: "Deep water fruit trees", icon: Droplets, color: "bg-blue-500" }
      ]
    },
    {
      day: "Saturday",
      date: "Jan 20", 
      activities: [
        { type: "harvest", task: "Pick ripe tomatoes", icon: Scissors, color: "bg-purple-500" }
      ]
    },
    {
      day: "Sunday",
      date: "Jan 21",
      activities: [
        { type: "rest", task: "Rest day - plan next week", icon: Calendar, color: "bg-gray-500" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Calendar className="h-10 w-10 text-primary" />
            Crop Calendar
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your weekly farming schedule with AI-powered reminders
          </p>
        </div>

        <div className="grid gap-4 md:gap-6">
          {weeklyActivities.map((day, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{day.day}</CardTitle>
                  <CardDescription className="text-sm font-medium">{day.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {day.activities.map((activity, actIndex) => {
                    const IconComponent = activity.icon;
                    return (
                      <div key={actIndex} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                        <div className={`p-2 rounded-full ${activity.color} text-white`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm">{activity.task}</p>
                          <Badge variant="secondary" className="text-xs mt-1 capitalize">
                            {activity.type.replace('-', ' ')}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              AI Farming Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">• <strong>Weather Alert:</strong> Rain expected Wednesday - skip watering that day</p>
              <p className="text-sm">• <strong>Market Tip:</strong> Tomato prices are rising - harvest and sell this weekend</p>
              <p className="text-sm">• <strong>Pest Alert:</strong> Aphid season starting - increase pest checks</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CropCalendar;