import React from 'react';
import { Check,Settings, CheckCircle2,ShieldCheck, Clock } from 'lucide-react';

const PricingSection = () => {
    const plans = [
    { title: "Standard Plan", price: "$39", active: false },
    { title: "Advanced Plan", price: "$49", active: true }, // Adjusted price for variety
    { title: "Enterprise Plan", price: "$99", active: false },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section: Left text, Right paragraph */}
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <div className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                <Settings size={18} />
                <span>Pricing Plan</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transparent pricing for <br /> every solution
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-gray-500 text-lg leading-relaxed">
                We believe in providing clear and upfront pricing to ensure that
                you understand the value of our services.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                  plan.active
                    ? "bg-orange-500 text-white shadow-2xl scale-105"
                    : "bg-gray-50 text-gray-900"
                }`}
              >
                {/* Decorative Background Icons (Visible in Screenshot) */}
                <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                  {/* You can add absolute positioned SVG icons here to match the ghost icons in the screenshot */}
                </div>

                <div className="text-5xl font-bold mb-2">
                  {plan.price}
                  <span className="text-sm font-medium opacity-70">/month</span>
                </div>

                <h3 className="text-xl font-bold mb-8">{plan.title}</h3>

                <ul className="space-y-4 mb-10 text-left">
                  {[
                    "Standard Manufacturing Services",
                    "Quality Control Checks",
                    "Technical Support",
                    "Monthly Progress Reports",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check
                        size={20}
                        className={
                          plan.active ? "text-white" : "text-orange-500"
                        }
                      />
                      <span
                        className={plan.active ? "opacity-90" : "text-gray-600"}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all ${
                    plan.active
                      ? "bg-white text-orange-500 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  Purchase Now
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Features */}
          <div className="max-w-4xl mx-auto mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            {/* Trial Feature */}
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 size={18} className="text-orange-500" />
              Get 30 day free trial
            </span>

            {/* No Hidden Fees Feature */}
            <span className="flex items-center gap-2 font-medium">
              <ShieldCheck size={18} className="text-orange-500" />
              No any hidden fees pay
            </span>

            {/* Cancellation Feature */}
            <span className="flex items-center gap-2 font-medium">
              <Clock size={18} className="text-orange-500" />
              You can cancel anytime
            </span>
          </div>
        </div>
      </section>
    );
};

export default PricingSection;