import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, Wrench, Droplet, AlertCircle, Clock } from "lucide-react";

const Fix = () => {
  const services = [
    {
      icon: Droplet,
      title: "Leaking Tap/Faucet",
      description: "Quick fix for dripping taps and faucets",
    },
    {
      icon: AlertCircle,
      title: "Clogged Drain",
      description: "Professional drain cleaning and unclogging",
    },
    {
      icon: Wrench,
      title: "Pipe Repairs",
      description: "Emergency pipe repairs and replacements",
    },
    {
      icon: AlertCircle,
      title: "Toilet Issues",
      description: "Repairs for running or clogged toilets",
    },
    {
      icon: Droplet,
      title: "Water Heater",
      description: "Installation and repair of water heaters",
    },
    {
      icon: Wrench,
      title: "General Plumbing",
      description: "All types of sanitary and plumbing work",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fix Sanitary Issues</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Leaking Tap? Clogged Drain? We've got you covered!
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Same-day service available</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Our expert team is ready to help you solve any sanitary issue quickly and efficiently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a href="tel:9330014377" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call: 9330014377
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a
                  href="https://wa.me/919330014377?text=Hi%2C%20I%20need%20help%20with%20a%20sanitary%20issue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold mb-2">Fast Response</h3>
            <p className="text-sm text-muted-foreground">
              We respond to emergency calls within hours
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Expert Technicians</h3>
            <p className="text-sm text-muted-foreground">
              Skilled professionals with years of experience
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quality Work</h3>
            <p className="text-sm text-muted-foreground">
              Guaranteed solutions with quality materials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fix;
