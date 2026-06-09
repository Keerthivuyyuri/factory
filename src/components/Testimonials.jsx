import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Settings,
  Zap,
  Waves,
  Sun,
  Disc,
} from "lucide-react";
const Testimonials = () => {
  return (
      <section className="bg-gray-50 py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left: Image */}
            <div className="h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial Expert"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Testimonial */}
            <div>
              <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <Settings size={18} />
                Our Client Say
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                What our satisfied clients <br />
                are saying
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 italic">
                "The team's attention to detail and commitment to quality
                exceeded our expectations. They delivered on time, and their
                innovative solutions improved our production efficiency by 30%.
                Highly recommended!"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/100"
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Brooklyn Simmons
                    </h4>
                    <p className="text-gray-500 text-sm">Homeowner</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="p-4 rounded-full bg-white border border-gray-200 hover:bg-orange-500 hover:text-white transition-all">
                    <ArrowLeft size={20} />
                  </button>
                  <button className="p-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Logo Strip */}
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mt-16">
            {[
              { Icon: Zap, name: "Logoipsum" },
              { Icon: Waves, name: "Logoipsum" },
              { Icon: Sun, name: "Logoipsum" },
              { Icon: Disc, name: "Logoipsum" },
              { Icon: Sun, name: "Logoipsum" },
            ].map((item, i) => {
              // Destructure the icon component from the object
              const IconComponent = item.Icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <span className="font-extrabold text-2xl text-gray-900 tracking-tighter">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
  );
};

export default Testimonials;