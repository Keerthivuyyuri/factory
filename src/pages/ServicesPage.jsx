// src/pages/ServicesPage.jsx
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from 'react';

const ServicesPage = () => {

    const [activeIndex, setActiveIndex] = useState(1); // Index 1 is open by default as per screenshot

const faqs = [
  { q: "What industries do you serve?" },
  { q: "How do you ensure product quality?", a: "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards." },
  { q: "What sustainability practices do you follow?" },
  { q: "Do you offer customized solutions?" },
  { q: "How do you handle safety in the workplace?" }
];

  const categories = [
    "Custom Manufacturing Solution",
    "Industrial Automation And Robotics",
    "Product Design And Prototyping",
    "Equipment Maintenance Support",
    "Research And Development",
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
          <h1 className="text-6xl font-bold text-white mb-4">
            Custom Manufacturing Solution
          </h1>
          <p className="text-lg text-gray-300">
            Home <span className="text-orange-500 px-2">•</span> Services
            <span className="text-orange-500 px-2">•</span>
            <span className="text-orange-500">
              Custom Manufacturing Solution
            </span>
          </p>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="max-w-[1200px] mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Left Column: Sidebar */}
        <div className="md:col-span-1 space-y-8">
          {/* Categories List */}
          <div className="bg-[#f59e0b] p-6 rounded-t-2xl">
            <h3 className="text-white font-bold text-lg">Services Category</h3>
          </div>
          <div className="border-x border-b p-6 rounded-b-2xl space-y-4">
            {categories.map((cat) => (
              <div
                key={cat}
                className="flex justify-between items-center group cursor-pointer border-b pb-3"
              >
                <span className="text-gray-700 group-hover:text-orange-500 transition">
                  {cat}
                </span>
                <ArrowRight
                  size={16}
                  className="text-gray-400 group-hover:text-orange-500"
                />
              </div>
            ))}
          </div>

          {/* Need Help Box */}
          <div
            className="relative rounded-2xl p-8 overflow-hidden text-white"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=400')", // Replace with your gear background
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/80"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#f59e0b] p-2 rounded-lg">
                  <span className="text-black font-bold">⚒</span>
                </div>
                <h3 className="text-xl font-bold">Toplax.</h3>
              </div>

              <h3 className="text-3xl font-bold mb-2">
                Need <span className="font-light">help!</span>
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Got questions or need assistance with your industry needs?
              </p>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Phone size={16} />
                  </div>
                  +1 840 841 256
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Mail size={16} />
                  </div>
                  info@domain.com
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Main Content */}
        <div className="md:col-span-3 space-y-6">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
            className="w-full h-[400px] object-cover rounded-3xl"
            alt="Robotics"
          />
          <p className="text-gray-600 leading-relaxed text-lg">
            Our business coaching services are designed to help entrepreneurs
            and professionals unlock their full potential, overcome challenges,
            and achieve sustainable growth. We provide tailored strategies and
            expert insights to improve leadership skills, enhance team
            performance, and streamline business operations. Whether you’re
            launching a startup or scaling an established business, our coaching
            empowers you to make informed decisions, set clear goals, and drive
            meaningful results. With a focus on both personal development and
            business success, we guide you toward building a thriving,
            purpose-driven enterprise.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Through expert guidance, we focus on refining your vision, enhancing
            operations, and unlocking new opportunities for growth. With a
            collaborative approach, we empower you to make confident decisions
            and build a sustainable, thriving business.
          </p>

        {/* 3. Why Choose Robotics Section */}
  <div>
    <h2 className="text-3xl mb-8">Why choose <span className="font-bold">robotics services</span></h2>
    <p className="text-gray-600 leading-relaxed text-lg">
            Through expert guidance, we focus on refining your vision, enhancing
            operations, and unlocking new opportunities for growth. With a
            collaborative approach, we empower you to make confident decisions
            and build a sustainable, thriving business.
          </p>
    <div className="grid md:grid-cols-2 gap-8 mt-8">
      {[
        { title: "Enhanced Efficiency", desc: "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leadsto higher output and faster delivery." },
        { title: "Enhanced Precision", desc: "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leadsto higher output and faster delivery." },
        { title: "Cost Optimization", desc: "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leadsto higher output and faster delivery." },
        { title: "Safety Enhancement", desc: "Robotics streamline complex tasks, reducing production time and minimizing downtime, which leadsto higher output and faster delivery." }
      ].map((item, index) => (
        <div key={index} className="flex gap-4 p-4 border border-gray-100 rounded-xl bg-white shadow-sm">
          <div className="text-orange-500">
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center font-bold">⚡</div>
          </div>
          <div>
            <h4 className="font-bold mb-1">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

   {/* Planning & Strategy Section */}
<section className="mt-25">
  <h2 className="text-3xl font-bold mb-6">Planning & strategy</h2>
  <p className="text-gray-600 mb-8 max-w-2xl">
    Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation solutions that align with your business goals.
  </p>

  {/* Strategy Bullet Points */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {[
      "Needs Assessment", "Timeline and Milestones", "Feasibility and ROI",
      "Technology Selection", "Process Optimization", "Scalability Planning"
    ].map((item) => (
      <div key={item} className="flex items-center gap-3">
        <div className="bg-orange-100 p-1 rounded-full text-orange-500">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
        </div>
        <span className="font-semibold text-gray-800">{item}</span>
      </div>
    ))}
  </div>

  {/* Strategy Images Grid */}
  <div className="grid md:grid-cols-2 gap-6">
    <img 
      src="https://images.unsplash.com/photo-1581092160607-ee22621dd758" 
      className="rounded-3xl h-72 w-full object-cover" 
      alt="Robot welding" 
    />
    <img 
      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
      className="rounded-3xl h-72 w-full object-cover" 
      alt="Robotic arm" 
    />
  </div>
</section>

<section className="mt-20">
  <h2 className="text-3xl font-bold mb-8">Frequently asked questions</h2>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div 
        key={index} 
        className={`border rounded-xl transition-all duration-300 ${activeIndex === index ? 'bg-[#f59e0b] text-white' : 'bg-white'}`}
      >
        <button 
          onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          className="w-full flex justify-between items-center p-5 font-bold"
        >
          {faq.q}
          <span>{activeIndex === index ? '-' : '+'}</span>
        </button>
        {activeIndex === index && faq.a && (
          <div className="p-5 pt-0 text-sm opacity-90 leading-relaxed">
            {faq.a}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

  </div>
      </section>
      
    </div>
  );
};

export default ServicesPage;
