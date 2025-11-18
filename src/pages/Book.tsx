import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, CheckCircle2, MessageCircle, Hammer, Package, Home } from "lucide-react";
import { toast } from "sonner";

const Book = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date) {
      toast.error("Please fill all fields");
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Enter valid 10-digit number");
      return;
    }

    // CHANGE THESE TWO NUMBERS
    const ownerNumber = "919330014377";     // ← Your number
    const managerNumber = "918017614312";   // ← Manager's number
    const customerNumber = "91" + formData.phone;

    const bookingDetails = encodeURIComponent(
      `NEW BOOKING!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\n\nCall them now! - AVI SANITARY Projects`
    );

    const customerConfirm = encodeURIComponent(
      `Hi ${formData.name}!\n\nYour FREE design consultation is booked for ${formData.date}.\n\nWe'll call you shortly to confirm the time.\n\nThank you for choosing AVI SANITARY Projects!\nWhatsApp: +919330014377`
    );

    // Send to Owner
    window.open(`https://wa.me/${ownerNumber}?text=${bookingDetails}`, "_blank");
    // Send to Manager
    window.open(`https://wa.me/${managerNumber}?text=${bookingDetails}`, "_blank");
    // Send to Customer (after 1.5 sec so browser doesn't block)
    setTimeout(() => {
      window.open(`https://wa.me/${customerNumber}?text=${customerConfirm}`, "_blank");
    }, 1500);

    setSubmitted(true);
    toast.success("Booking confirmed! WhatsApp messages sent to all 3 numbers");
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `New Booking\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}`
    );
    window.open(`https://wa.me/919330014377?text=${msg}`, "_blank");
  };

  const steps = [
    { icon: Calendar, title: "Meet Designer", description: "Free consultation" },
    { icon: CheckCircle2, title: "Book Confirmation", description: "We finalize budget" },
    { icon: Hammer, title: "Execution Begins", description: "Renovation starts" },
    { icon: Package, title: "Final Installations", description: "Quality finishing" },
    { icon: Home, title: "Move In", description: "Your dream space ready!" },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-muted/30 text-center">
        <div className="container max-w-2xl mx-auto px-4">
          <Card>
            <CardContent className="pt-12 pb-12">
              <CheckCircle2 className="h-20 w-20 text-primary mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Slot Confirmed!</h1>
              <p className="text-lg text-muted-foreground mb-8">
                WhatsApp messages sent to you, manager & customer instantly.
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
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
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
            <CardHeader><CardTitle>Schedule Your Visit</CardTitle></CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Full Name *</Label>
                  <Input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Phone Number *</Label>
                  <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="10 digits" required />
                </div>
                <div className="space-y-2">
                  <Label>Preferred Date *</Label>
                  <Input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required min={new Date().toISOString().split("T")[0]} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader><CardTitle>Prefer WhatsApp?</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <p>Instant booking via WhatsApp</p>
              <Button onClick={handleWhatsApp} variant="secondary" size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" /> Book via WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Book;
