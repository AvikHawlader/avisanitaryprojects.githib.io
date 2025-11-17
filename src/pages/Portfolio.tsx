import heroBathroom from "@/assets/hero-bathroom.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroLiving from "@/assets/hero-living.jpg";

const Portfolio = () => {
  // Using the generated images multiple times to showcase different projects
  const projects = [
    { id: 1, image: heroBathroom, title: "Modern Bathroom Design", category: "Bathroom" },
    { id: 2, image: heroKitchen, title: "Contemporary Kitchen", category: "Kitchen" },
    { id: 3, image: heroLiving, title: "Living Space with Wardrobe", category: "Living" },
    { id: 4, image: heroBathroom, title: "Luxury Bath Renovation", category: "Bathroom" },
    { id: 5, image: heroKitchen, title: "Modular Kitchen Design", category: "Kitchen" },
    { id: 6, image: heroLiving, title: "Modern Living Room", category: "Living" },
    { id: 7, image: heroBathroom, title: "Premium Bathroom", category: "Bathroom" },
    { id: 8, image: heroKitchen, title: "Smart Kitchen Layout", category: "Kitchen" },
    { id: 9, image: heroLiving, title: "Contemporary Living", category: "Living" },
    { id: 10, image: heroBathroom, title: "Elegant Bathroom", category: "Bathroom" },
    { id: 11, image: heroKitchen, title: "Designer Kitchen", category: "Kitchen" },
    { id: 12, image: heroLiving, title: "Living with Storage", category: "Living" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of completed projects showcasing bathrooms, kitchens, and living spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
