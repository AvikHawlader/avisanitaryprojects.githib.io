import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">AVI SANITARY Projects</h3>
            <p className="text-sm text-muted-foreground">
              Premium interior design for bathrooms, kitchens, and living spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="/budget" className="hover:text-foreground transition-colors">Budget Calculator</a></li>
              <li><a href="/book" className="hover:text-foreground transition-colors">Book Appointment</a></li>
              <li><a href="/fix" className="hover:text-foreground transition-colors">Fix Sanitary</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:9330014377" className="hover:text-foreground transition-colors">
                  9330014377
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Mon–Sat, 10AM–10PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 AVI SANITARY Projects. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
