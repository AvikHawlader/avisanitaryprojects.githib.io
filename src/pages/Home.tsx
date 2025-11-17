import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroLiving from "@/assets/hero-living.jpg";

const Home = () => {
  const projects = [
    {
      title: "Luxury Bathrooms",
      image: heroBathroom,
      description: "Premium bathroom renovations with modern fixtures and elegant design",
    },
    {
      title: "Modern Kitchens",
      image: heroKitchen,
      description: "Modular kitchens with smart storage and beautiful finishes",
    },
    {
      title: "Living & Wardrobe",
      image: heroLiving,
      description: "Contemporary living spaces with custom wardrobes",
    },
    {
      title: "Fix your aminities",
      image: heroLiving,
      description: "Contemporary living spaces with custom wardrobes",
    },
    {
      title: "Price Calculator",
      image: heroLiving,
      description: "Contemporary living spaces with custom wardrobes",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBathroom}
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stop coordinating plumbers, designers, and tile shops
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Avi Sanitary Projects delivers complete, turnkey renovations.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We handle the mess. You get the benefits.
            </p>
            <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
              <span>Design</span>
              <span>•</span>
              <span>Products</span>
              <span>•</span>
              <span>Installation</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/budget">
                  Get Your Free Budget Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to Transform Your Space?</h3>
              <p className="text-primary-foreground/90">Get in touch with us today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="secondary" size="lg">
                <a href="tel:9330014377" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a
                  href="https://wa.me/919330014377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
