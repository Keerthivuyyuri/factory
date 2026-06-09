import React from 'react';
import { Settings } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      id: "01",
      title: "Understanding Your Needs",
      desc: "We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.",
    },
    {
      id: "02",
      title: "Design and Planning",
      desc: "Our team collaborates to create detailed project plans, ensuring all aspects of the process.",
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Utilizing advanced technologies and skilled personnel, we execute the project.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <Settings size={18} />
              Our Process
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              <span className="font-light text-gray-900">
                Streamlined processes{" "}
                <span className="font-bold text-gray-900">for</span>
              </span>
              <br />
              <span className="font-bold text-gray-900">
                optimal efficiency
              </span>
            </h2>

            <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Industrial Factory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Our process is designed to maximize efficiency and quality at
              every stage of production. By integrating advanced technologies
              and best practices, we ensure seamless workflows.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-start gap-6 p-6 rounded-3xl transition-all ${
                    index === 1
                      ? "bg-orange-500 text-white shadow-xl"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold ${
                      index === 1 ? "text-white" : "text-orange-500"
                    }`}
                  >
                    {step.id}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        index === 1 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={
                        index === 1 ? "text-orange-50" : "text-gray-600"
                      }
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProcessSection;