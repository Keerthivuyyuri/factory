const ProjectsPage = () => {
  const projects = [
    {
      title: "Total Quality Management Implementation",
      category: "Development",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Advanced Research In Material Science",
      category: "Automation",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Workplace Safety Enhancement Initiative",
      category: "Infrastructure",
      img: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Robotic Process Automation Deployment",
      category: "Infrastructure",
      img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Energy-Efficient Manufacturing Systems",
      category: "Manufacturing",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Redesigning Factory Layouts For Efficiency",
      category: "Development",
      img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop')",
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content Container - Handles all alignment */}
        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center z-10">
          <h1 className="text-6xl font-bold text-white mb-4">Latest Post</h1>
          <p className="text-lg text-gray-300">
            Home <span className="text-orange-500 px-2">•</span>
            <span className="text-orange-500">Blog</span>
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
