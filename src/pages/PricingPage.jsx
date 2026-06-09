import ServicesSection from "../components/ServicesSection";
import Testimonials from "../components/Testimonials";
import { Check } from 'lucide-react';

// src/pages/PricingPage.jsx
const PricingPage = () => {
     const plans = [
    { title: "Standard Plan", price: "$39", active: false },
    { title: "Advanced Plan", price: "$49", active: true }, // Adjusted price for variety
    { title: "Enterprise Plan", price: "$99", active: false },
  ];
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* Hero Header */}
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
          <h1 className="text-6xl font-bold text-white mb-4">Pricing Plan</h1>
          <p className="text-lg text-gray-300">
            Home <span className="text-orange-500 px-2">•</span> 
            <span className="text-orange-500">Pricing</span>
          </p>
        </div>
      </section>

      {/* 2. Updated Pricing Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
                plan.active
                  ? "bg-orange-500 text-white shadow-2xl scale-105"
                  : "bg-gray-50 text-gray-900 border-gray-200"
              }`}
            >
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
                    <Check size={20} className={plan.active ? "text-white" : "text-orange-500"} />
                    <span className={plan.active ? "opacity-90" : "text-gray-600"}>
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
      </section>
      
      {/* Add your other sections (Solutions, Testimonials) here... */}
      <ServicesSection />
      <Testimonials />
    </div>
  );
};

export default PricingPage;