import { useState } from 'react';
import { Target, Eye, Gem, CheckCircle2, Settings } from 'lucide-react';

const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const content = {
    mission: {
      title: "Our Mission",
      text: "Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.",
      points: ['Sustainable Manufacturing Practices', 'Advanced Technology Integration', 'Community and Environmental Responsibility', 'Innovation-Driven Growth']
    },
    vision: {
      title: "Our Vision",
      text: "To become the global leader in industrial evolution, setting the standard for sustainable, technology-driven manufacturing that empowers future generations.",
      points: ['Global Industry Leadership', 'Sustainable Future Benchmarking', 'Technology Empowerment', 'Scalable Solutions']
    },
    value: {
      title: "Our Value",
      text: "At our core, we believe in integrity, precision, and collaboration. We are committed to excellence and providing solutions that prioritize long-term partnership.",
      points: ['Uncompromising Integrity', 'Precision Engineering', 'Collaborative Partnerships', 'Excellence in Execution']
    }
  };

  return (
    <section className="bg-white pb-24">
        {/* Header Section with Background */}
        <div className="relative w-full h-[450px] bg-gray-900 flex items-center px-12 md:px-24">
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80')",
            }}
          ></div>

          <div className="relative z-10 text-white max-w-6xl w-full">
            {/* 1. Icon and Label Alignment: Flex Row */}
            <div className="flex items-center gap-2 mb-6">
              <Settings className="text-orange-500" size={20} />
              <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                Our Approach
              </h3>
            </div>

            {/* 2. Main Title and Paragraph Alignment: Grid Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Title Column */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-lg">
                Empowering sustainable growth in industry
              </h1>

              {/* Paragraph Column */}
              <p className="text-gray-300 text-base leading-relaxed mt-1 max-w-md">
                We provide a wide range of services tailored to meet the unique
                needs of modern industries. From precision manufacturing and
                advanced automation to custom product design and efficient
                logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Overlapping Content Container */}
        <div className="max-w-6xl mx-auto -mt-24 px-6 relative z-20">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {["mission", "vision", "value"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-8 flex items-center justify-center gap-3 font-bold transition-all ${
                    activeTab === tab
                      ? "bg-orange-500 text-white"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  {tab === "mission" && <Target size={24} />}
                  {tab === "vision" && <Eye size={24} />}
                  {tab === "value" && <Gem size={24} />}
                  Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 capitalize">
                  {content[activeTab].title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {content[activeTab].text}
                </p>
                <ul className="space-y-4">
                  {content[activeTab].points.map((pt, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 font-semibold text-gray-800"
                    >
                      <CheckCircle2 className="text-orange-500" size={20} />{" "}
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
                  alt="Industrial context"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ApproachSection;