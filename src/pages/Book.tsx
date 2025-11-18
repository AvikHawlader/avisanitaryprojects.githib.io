import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, CheckCircle2, MessageCircle, Hammer, Package, Home } from "lucide-react";
import { toast } from "sonner";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date) {
      toast.error("Please fill in all fields");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    // === YOUR 3 NUMBERS (CHANGE THESE) ===
    const ownerNumber = "919330014377";     // ← Your number
    const managerNumber = "918017614312";   // ← Manager's number
    const customerNumber = "91" + formData.phone;

    const bookingDetails = encodeURIComponent(
      `NEW BOOKING - AVI SANITARY Projects\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Preferred Date: ${formData.date}\n\n` +
      `Please confirm the slot ASAP!`
    );

    const customerConfirm = encodeURIComponent(
      `Hi ${formData.name}! 🎉\n\n` +
      `Your FREE design consultation is booked for ${formData.date}.\n\n` +
      `We will call you shortly to confirm the time.\n\n` +
      `Thank you for choosing AVI SANITARY Projects!\n` +
      `WhatsApp: +919330014377`
    );

    // Send to YOU
    window.open(`https://wa.me/${ownerNumber}?text=${bookingDetails}`, "_blank");
    // Send to MANAGER
    window.open(`https://wa.me/${managerNumber}?text=${bookingDetails}`, "_blank");
    // Send confirmation to CUSTOMER (after 1.5 sec so tabs don’t block)
    setTimeout(() => {
      window.open(`https://wa.me/${customerNumber}?text=${customerConfirm}`, "_blank");
    }, 1500);

    setSubmitted(true);
    toast.success("Booking confirmed! Messages sent to all.");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi, I'd like to book a free design consultation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date}`
    );
    window.open(`https://wa.me/919330014377?text=${message}`, "_blank");
  };

  const steps = [
    { icon: Calendar, title: "Meet Designer", description: "Free consultation to understand your vision" },
    { icon: CheckCircle2, title: "Book Confirmation", description: "We finalize the design and budget" },
    { icon: Hammer, title: "Execution Begins", description: "Our team starts the renovation work" },
    { icon: Package, title: "Final Installations", description: "Quality fixtures and finishing touches" },
    { icon: Home, title: "Move In", description: "Your dream space is ready!" },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Slot Confirmed!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thank you! We've sent confirmations to you, our team, and the customer via WhatsApp.
              </p>
              <Button asChild size="lg" className="w-full">
                <a href="/">Back to Home</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg text-muted-foreground">Free Design Consultation - No Obligation</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Schedule Your Visit</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Prefer WhatsApp?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-primary-foreground/90">
                Book directly via WhatsApp for instant confirmation.
              </p>
              <Button onClick={handleWhatsApp} variant="secondary" size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Book;
