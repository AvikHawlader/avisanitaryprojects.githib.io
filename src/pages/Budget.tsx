import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

type RoomType = "bathroom" | "kitchen" | "living" | "";
type SizeType = "small" | "medium" | "large" | "xlarge" | "";
type StyleType = "essentials" | "modern" | "luxury" | "";

const Budget = () => {
  const [step, setStep] = useState(1);
  const [room, setRoom] = useState<RoomType>("");
  const [size, setSize] = useState<SizeType>("");
  const [style, setStyle] = useState<StyleType>("");

  const calculateBudget = () => {
    const baseRates = {
      bathroom: { small: 150000, medium: 250000, large: 400000, xlarge: 600000 },
      kitchen: { small: 200000, medium: 350000, large: 550000, xlarge: 800000 },
      living: { small: 180000, medium: 300000, large: 500000, xlarge: 750000 },
    };

    const styleMultiplier = {
      essentials: 1,
      modern: 1.3,
      luxury: 1.7,
    };

    if (room && size && style) {
      const base = baseRates[room][size];
      const min = Math.round(base * styleMultiplier[style]);
      const max = Math.round(min * 1.2);
      return { min, max };
    }
    return null;
  };

  const budget = calculateBudget();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Budget Calculator</h1>
          <p className="text-lg text-muted-foreground">
            Get an approximate estimate for your renovation project
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle>Step {step} of 3</CardTitle>
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-2 w-12 rounded-full ${
                      i <= step ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Select Room Type</Label>
                <RadioGroup value={room} onValueChange={(value) => setRoom(value as RoomType)}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="bathroom" id="bathroom" />
                    <Label htmlFor="bathroom" className="flex-1 cursor-pointer">
                      Bathroom
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="kitchen" id="kitchen" />
                    <Label htmlFor="kitchen" className="flex-1 cursor-pointer">
                      Modular Kitchen
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="living" id="living" />
                    <Label htmlFor="living" className="flex-1 cursor-pointer">
                      Living Room + Wardrobe
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Approximate Area of Work</Label>
                <RadioGroup value={size} onValueChange={(value) => setSize(value as SizeType)}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small" className="flex-1 cursor-pointer">
                      Small (Up to 50 sq ft)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="flex-1 cursor-pointer">
                      Medium (50-100 sq ft)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large" className="flex-1 cursor-pointer">
                      Large (100-200 sq ft)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="xlarge" id="xlarge" />
                    <Label htmlFor="xlarge" className="flex-1 cursor-pointer">
                      Extra Large (200+ sq ft)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Select Style</Label>
                <RadioGroup value={style} onValueChange={(value) => setStyle(value as StyleType)}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="essentials" id="essentials" />
                    <Label htmlFor="essentials" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-semibold">Essentials</div>
                        <div className="text-sm text-muted-foreground">Basic fixtures and finishes</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="modern" id="modern" />
                    <Label htmlFor="modern" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-semibold">Modern</div>
                        <div className="text-sm text-muted-foreground">Contemporary designs with quality materials</div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="luxury" id="luxury" />
                    <Label htmlFor="luxury" className="flex-1 cursor-pointer">
                      <div>
                        <div className="font-semibold">Luxury</div>
                        <div className="text-sm text-muted-foreground">Premium materials and high-end finishes</div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {budget && (
              <div className="bg-primary/10 p-6 rounded-lg text-center space-y-4">
                <Calculator className="h-12 w-12 mx-auto text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Estimated Budget Range</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(budget.min)} - {formatCurrency(budget.max)}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  *This is an approximate estimate. Final cost may vary based on specific requirements.
                </p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep} className="flex-1">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}
              {step < 3 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !room) ||
                    (step === 2 && !size)
                  }
                  className="flex-1"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                budget && (
                  <Button asChild className="flex-1">
                    <Link to="/book">
                      Book Appointment
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Budget;
