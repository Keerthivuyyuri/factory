import React from 'react';
import { Settings, Factory, LayoutGrid } from "lucide-react";
const FeaturesSection = () => {
    return (
       <section className="bg-white py-24 px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
                <Settings size={18} /> Our Key Feature
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Core strengths in <br />
                <span className="text-gray-900">industrial innovation</span>
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Our expertise in industrial innovation combines advanced
              technology, sustainable practices, and a skilled workforce to
              deliver efficient, future-ready solutions that drive industry
              progress.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            {/* Card 1 */}
            <div className="p-12 border-b md:border-r border-gray-100 h-[350px]">
              <Factory className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Technology Integration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We integrate cutting-edge technologies into every aspect of our
                operations, enhancing efficiency, precision, and innovation to
                deliver superior industrial solutions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-12 border-b border-gray-100 h-[350px]">
              <LayoutGrid className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Uncompromising Quality Standards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We uphold the highest quality standards across all processes,
                ensuring consistency, reliability, and excellence in every
                product and service we deliver.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-12 md:border-r border-gray-100 h-[350px]">
              <Factory className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continuous Innovation and R&D
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize ongoing research and development to drive
                continuous innovation, staying ahead of industry trends and
                creating advanced solutions that meet evolving market demands.
              </p>
            </div>

            {/* Card 4 */}
            <div className="h-[350px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    );
};
export default FeaturesSection;