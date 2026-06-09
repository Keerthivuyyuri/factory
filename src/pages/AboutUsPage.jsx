// src/pages/AboutUsPage.jsx
import AboutSection from "../components/AboutSection";
import ApproachSection from "../components/ApproachSection";
import HistorySection from "../components/HistorySection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import FeaturesSection from "../components/FeaturesSection";
import { Settings } from "lucide-react";
import Testimonials from "../components/Testimonials";

const AboutUsPage = () => {
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
          <h1 className="text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-lg text-gray-300">
            Home <span className="text-orange-500 px-2">•</span>
            <span className="text-orange-500">About Us</span>
          </p>
        </div>
      </section>
      <AboutSection />
      <ApproachSection />
      <HistorySection />
      <ServicesSection />
      <FeaturesSection />
      <ProcessSection />

      {/* Core Strengths Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          {/* Left Side */}
          <div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <Settings size={18} />
              Our Team
            </div>

            <h2 className="text-4xl md:text-5xl leading-tight mb-8">
              <span className="font-light text-gray-900">
                Core strengths in
              </span>
              <br />
              <span className="font-bold text-gray-900">
                industrial innovation
              </span>
            </h2>
          </div>
          <div>
            <button className="flex items-center border border-orange-500 rounded-xl overflow-hidden hover:shadow-md transition">
              <span className="px-5 py-3 text-gray-900 font-medium bg-white">
                All Members
              </span>

              <span className="bg-orange-500 text-white px-4 py-3 flex items-center justify-center">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ronald Richards",
              role: "Manufacturing Executive",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            },
            {
              name: "Brooklyn Simmons",
              role: "Industrial Engineer",
              img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            },
            {
              name: "Cameron Williamson",
              role: "Production Supervisor",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
            },
            {
              name: "Darlene Robertson",
              role: "Manufacturing Executive",
              img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
            },
          ].map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-4">
                <img
                  src={member.img}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={member.name}
                />
              </div>
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />

      {/* FAQ Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <Settings size={18} />
              FAQS
            </div>

            <h2 className="text-[56px] leading-[1.1] text-gray-900">
              <span className="font-light">Frequently asked</span>
              <br />
              <span className="font-bold">questions</span>
            </h2>
          </div>

          <button className="flex items-center border border-orange-500 rounded-xl overflow-hidden hover:shadow-md transition">
            <span className="px-5 py-3 text-gray-900 font-medium bg-white">
              All FAQs
            </span>

            <span className="bg-orange-500 text-white px-4 py-3 flex items-center justify-center">
              ↗
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative rounded-[32px] overflow-hidden h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt="Factory"
              className="w-full h-full object-cover"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Contact */}
            <div className="absolute bottom-8 left-8 flex items-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">☎</span>
                <span>+911236547890</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-orange-500">✉</span>
                <span>info@domainname.com</span>
              </div>
            </div>
          </div>

          {/* Right FAQs */}
          <div className="space-y-5">
            <div className="border border-gray-200 rounded-xl px-6 py-5 flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                What industries do you serve?
              </span>
              <span>⌄</span>
            </div>

            <div className="bg-orange-500 rounded-xl px-6 py-5 text-white">
              <div className="flex justify-between items-center">
                <span className="font-medium">
                  How do you ensure product quality?
                </span>
                <span>⌃</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-orange-50">
                We implement rigorous quality control measures at every stage of
                production, ensuring consistency and high standards.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl px-6 py-5 flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                What sustainability practices do you follow?
              </span>
              <span>⌄</span>
            </div>

            <div className="border border-gray-200 rounded-xl px-6 py-5 flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                Do you offer customized solutions?
              </span>
              <span>⌄</span>
            </div>

            <div className="border border-gray-200 rounded-xl px-6 py-5 flex justify-between items-center cursor-pointer">
              <span className="font-medium text-gray-900">
                How do you handle safety in the workplace?
              </span>
              <span>⌄</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
