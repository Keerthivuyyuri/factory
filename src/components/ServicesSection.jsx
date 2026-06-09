import React from 'react';
import { Settings, ArrowRight } from "lucide-react";

const ServicesSection = () => {
    return (
        <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
              Innovative factory and industry <br />
              <span className="text-white">solutions today</span>
            </h2>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Automation Solutions",
                  desc: "Streamlining processes through cutting-edge technology.",
                },
                {
                  title: "Quality Control",
                  desc: "Ensuring product excellence through rigorous testing.",
                },
                {
                  title: "Process Engineering",
                  desc: "Ensuring product excellence through rigorous testing.",
                },
                {
                  title: "Product Development",
                  desc: "Streamlining processes through cutting-edge technology.",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-colors"
                >
                  <div className="text-orange-500 mb-4">
                    {/* Replace with appropriate Lucide icons */}
                    <Settings size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-gray-400">
                Let’s make something great work together.
                {/* Replace this: <a href="#" ...> */}
                <button
                  onClick={() => console.log("Quote requested")}
                  className="text-orange-500 font-bold hover:underline ml-1 bg-transparent border-none cursor-pointer p-0"
                >
                  Get Free Quote
                </button>
              </p>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative mr-[-200px]">
            <div className="h-full min-h-[500px] rounded-l-3xl overflow-hidden relative">
              {/* The Image */}
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
                alt="Industrial Machinery"
                className="w-full h-full object-cover"
              />

              {/* FLOATING CTA: Positioned at the start (left edge) of the image container */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:flex items-center justify-center">
                <div className="bg-orange-500 w-24 h-24 rounded-full flex flex-col items-center justify-center border-[8px] border-gray-900 cursor-pointer hover:scale-105 transition-transform shadow-2xl">
                  <ArrowRight className="text-white mb-1" size={24} />
                  <span className="text-[9px] font-bold uppercase text-white leading-tight text-center">
                    Connect Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ServicesSection;