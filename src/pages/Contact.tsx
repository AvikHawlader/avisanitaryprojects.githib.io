import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Get in touch with AVI SANITARY Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:9330014377"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      9330014377
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Monday – Saturday</p>
                    <p className="text-muted-foreground">10:00 AM – 10:00 PM</p>
                    <p className="text-sm text-muted-foreground mt-1">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:avikhawlader2002@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      avikhawlader2002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      AVI SANITARY Projects
                      <br />
                      Ganguli Para, Shyamnagar, Kolkata, Garshyamnagar
                      West Bengal 743127
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Quick Contact via WhatsApp</h3>
                <p className="text-primary-foreground/90 mb-4">
                  Message us directly for faster response and easy communication
                </p>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <a
                    href="https://wa.me/919330014377"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div>
            <Card className="h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4292716438226!2d88.38576097553589!3d22.823602423723543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f890b8e0bf46c1%3A0xc1743adc39777244!2sAvi%20Sanatary!5e0!3m2!1sen!2sin!4v1763409268555!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AVI SANITARY Projects Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
