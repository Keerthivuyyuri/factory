import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import PricingSection from "../components/PricingSection";
import ProcessSection from "../components/ProcessSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import { Settings } from "lucide-react";
import SolutionSection from "../components/SolutionSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SolutionSection />

      {/* Our Story Section */}
<section className="max-w-[1200px] mx-auto px-6 py-24">

  {/* Top Row */}
  <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">

    {/* Left Side */}
          <div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <Settings size={18} />
              Our STORY
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              <span className="font-light text-gray-900">Transforming industries</span>
              <br />
              <span className="font-bold text-gray-900">with innovative efficient </span>
              <br />
              <span className="font-bold text-gray-900">solutions </span>
            </h2>
          </div>

    {/* Top Right Images */}
{/* Top Right Images */}
<div className="flex gap-6 justify-end pr-8 mt-4">
  <img
    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
    alt="Construction Site"
    className="w-[220px] h-[150px] rounded-[30px] object-cover"
  />

  <img
    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
    alt="Industrial Warehouse"
    className="w-[220px] h-[150px] rounded-[30px] object-cover"
  />
</div>
  </div>

  {/* Bottom Row */}
  <div className="grid lg:grid-cols-2 gap-10 items-start">

    {/* Large Image */}
    <div>
      <img
        src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=1400&auto=format&fit=crop"
        alt="Industrial Work"
        className="w-full h-[420px] object-cover rounded-[36px]"
      />
    </div>

    {/* Content */}
    <div>
      <p className="text-gray-500 leading-8 text-[15px]">
        We specialize in revolutionizing industries by delivering innovative,
        efficient solutions that enhance productivity and streamline processes.
        Through advanced technologies, precision engineering, and sustainable
        practices.
      </p>

      <div className="border-t border-gray-200 my-10"></div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-2">10k+</h3>
          <p className="text-gray-800">Completed Project</p>
        </div>

        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-2">15+</h3>
          <p className="text-gray-800">Satisfied Customer</p>
        </div>

        <div>
          <h3 className="text-orange-500 text-5xl font-bold mb-2">10k+</h3>
          <p className="text-gray-800">Year Of Mastery</p>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="flex items-center gap-8">

        {/* Avatars */}
        <div className="flex -space-x-3">
          <img
            src="https://i.pravatar.cc/60?img=1"
            className="w-12 h-12 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/60?img=2"
            className="w-12 h-12 rounded-full border-2 border-white"
            alt=""
          />
          <img
            src="https://i.pravatar.cc/60?img=3"
            className="w-12 h-12 rounded-full border-2 border-white"
            alt=""
          />
        </div>

        {/* Watch Intro */}
        <button className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full border-[3px] border-orange-500 flex items-center justify-center text-orange-500 text-xl">
            ▶
          </div>

          <span className="text-sm font-medium uppercase tracking-wide">
            WATCH INTRO
          </span>
        </button>

      </div>
    </div>
  </div>
</section>

      <ServicesSection />

      {/* Our Work / Project Initiatives Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          {/* Left Side */}
          <div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <Settings size={18} />
              Our Work
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              <span className="font-light text-gray-900">
                Our successful project
              </span>
              <br />
              <span className="font-bold text-gray-900">initiatives</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm mt-4 md:mt-0">
            Our successful project initiatives showcase our commitment to
            excellence and innovation across various industries.
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-3 mb-12 text-sm font-medium">
          {[
            "All",
            "Automation",
            "Development",
            "Infrastructure",
            "Manufacturing",
            "Sustainability",
          ].map((filter, i) => (
            <div key={filter} className="flex items-center">
              <button
                className={`transition ${
                  i === 0
                    ? "text-orange-500"
                    : "text-gray-500 hover:text-orange-500"
                }`}
              >
                {filter}
              </button>
              {i !== 5 && <span className="mx-3 text-gray-300">/</span>}
            </div>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Total Quality Management Implementation",
              tag: "Development",
              img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758",
            },
            {
              title: "Advanced Research In Material Science",
              tag: "Automation",
              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            },
            {
              title: "Workplace Safety Enhancement Initiative",
              tag: "Infrastructure",
              img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
            },
            {
              title: "Robotic Process Automation Deployment",
              tag: "Infrastructure",
              img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((project, i) => (
            <div key={i} className="group">
              <div className="relative rounded-3xl overflow-hidden mb-6">
                <img
                  src={project.img}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={project.title}
                />
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-medium">
                  {project.tag}
                </div>
              </div>
              <h4 className="font-bold text-xl">{project.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <ProcessSection />
      <PricingSection />
      <Testimonials />
      <BlogSection />
    </>
  );
};
export default HomePage;
