import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera, Upload, CheckCircle, AlertTriangle, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CropAnalyzer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic results
    setTimeout(() => {
      const mockResults = [
        {
          condition: "Healthy Plant",
          confidence: 92,
          type: "healthy",
          description: "Your crop appears healthy with good leaf color and structure.",
          recommendations: [
            "Continue current watering schedule",
            "Monitor for pests weekly",
            "Consider organic fertilizer in 2 weeks"
          ]
        },
        {
          condition: "Early Blight Detected",
          confidence: 87,
          type: "disease",
          description: "Signs of early blight fungal infection detected on leaves.",
          recommendations: [
            "Remove affected leaves immediately",
            "Apply copper-based fungicide",
            "Improve air circulation around plants",
            "Water at soil level, avoid wetting leaves"
          ]
        },
        {
          condition: "Aphid Infestation",
          confidence: 94,
          type: "pest",
          description: "Small green insects detected on leaf surfaces.",
          recommendations: [
            "Spray with neem oil solution",
            "Introduce ladybugs as natural predators",
            "Check neighboring plants",
            "Increase monitoring frequency"
          ]
        }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setAnalysisResult(randomResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `Detected: ${randomResult.condition}`,
      });
    }, 3000);
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case "healthy":
        return "bg-green-100 text-green-800 border-green-200";
      case "disease":
        return "bg-red-100 text-red-800 border-red-200";
      case "pest":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (type: string) => {
    switch (type) {
      case "healthy":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "disease":
      case "pest":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default:
        return <Leaf className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            AI Crop Analyzer
          </h1>
          <p className="text-lg text-muted-foreground">
            Upload a photo of your crop to detect diseases and pests
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="mr-2 h-5 w-5" />
                Upload Crop Photo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {!selectedImage ? (
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Camera className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-4">
                    Take a clear photo of your crop leaves
                  </p>
                  <label htmlFor="image-upload">
                    <Button variant="outline" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Choose Photo
                    </Button>
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Uploaded crop"
                    className="w-full h-64 object-cover rounded-lg border"
                  />
                  <div className="flex gap-2">
                    <Button
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      className="flex-1"
                    >
                      {isAnalyzing ? "Analyzing..." : "Analyze Photo"}
                    </Button>
                    <label htmlFor="image-upload">
                      <Button variant="outline" className="cursor-pointer">
                        <Upload className="h-4 w-4" />
                      </Button>
                    </label>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent>
              {!analysisResult && !isAnalyzing && (
                <div className="text-center py-8 text-muted-foreground">
                  <Leaf className="mx-auto h-12 w-12 mb-4" />
                  <p>Upload and analyze a photo to see results</p>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">
                    AI is analyzing your crop photo...
                  </p>
                </div>
              )}

              {analysisResult && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(analysisResult.type)}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {analysisResult.condition}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className={getStatusColor(analysisResult.type)}
                      >
                        {analysisResult.confidence}% Confidence
                      </Badge>
                    </div>
                  </div>

                  <Alert>
                    <AlertDescription>
                      {analysisResult.description}
                    </AlertDescription>
                  </Alert>

                  <div>
                    <h4 className="font-semibold mb-3">Recommendations:</h4>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CropAnalyzer;