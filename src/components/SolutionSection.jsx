import React from "react";
import {
  Factory,
  Bot,
  Ruler,
  Wrench,
  ArrowRight,
  Settings,
} from "lucide-react";

const SolutionSection = () => {
  const services = [
    {
      icon: <Factory size={34} />,
      title: "Custom Manufacturing Solution",
    },
    {
      icon: <Bot size={34} />,
      title: "Industrial Automation And Robotics",
    },
    {
      icon: <Ruler size={34} />,
      title: "Product Design And Prototyping",
    },
    {
      icon: <Wrench size={34} />,
      title: "Equipment Maintenance Support",
    },
  ];

  return (
    <section className="pb-24 bg-[#f5f5f5]">
      {/* Background Section */}
      <div className="relative h-[460px] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=1800&auto=format&fit=crop"
          alt="Industrial Automation"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-20">
          {/* Small Heading */}
          <div className="flex items-center gap-2 mb-5">
            <Settings size={18} className="text-orange-500" />
            <span className="text-orange-500 uppercase tracking-[3px] text-xs font-semibold">
              Services
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left */}
            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              <span className="font-light text-white">
                Comprehensive solutions
              </span>
              <br />
              <span className="font-bold text-white">
                for industrial excellence
              </span>
            </h2>
            {/* Right */}
            <p className="text-gray-200 leading-8 text-[15px] max-w-[500px] mt-3">
              We provide a wide range of services tailored to meet the unique
              needs of modern industries. From precision manufacturing and
              advanced automation to custom product design and efficient
              logistics.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Services Card */}
      <div className="max-w-[1200px] mx-auto px-6 relative -mt-20 z-20">
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-10 border-r last:border-r-0 border-gray-200 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <div className="text-orange-500 mb-8">{service.icon}</div>

                  <h3 className="text-[22px] font-semibold text-gray-900 leading-snug">
                    {service.title}
                  </h3>
                </div>

                <button className="w-11 h-11 bg-gray-100 rounded-lg flex items-center justify-center mt-10 hover:bg-orange-500 hover:text-white transition">
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
