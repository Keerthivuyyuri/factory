import { useState } from 'react';
import { CheckCircle2, Settings } from 'lucide-react';

const HistorySection = () => {
  const [activeYear, setActiveYear] = useState('In 1920 - Planning');
  
  const historyData = [
    'In 1920 - Planning',
    'In 1922 - Journey Started',
    'In 1925 - Journey Progress',
    'In 1930 - Global Reach',
    'In 1940 - Industry Leadership'
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-24">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="text-orange-500" size={20} />
            <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">
              Our History
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <h2 className="text-4xl md:text-5xl leading-tight text-gray-900">
              <span className="font-normal">Foundation of excellences</span>
              <br />
              <span className="font-bold">in industry</span>
            </h2>
            <p className="text-gray-600">
              Built on a legacy of quality and innovation, we have established a
              strong foundation in the industrial sector, consistently
              delivering reliable solutions that drive progress and set industry
              standards.
            </p>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-6xl mx-auto bg-white border border-blue-200 rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
          {/* Left Sidebar Tabs */}
          <div className="w-full md:w-1/3 border-r border-blue-200">
            {historyData.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`w-full text-left px-8 py-6 font-bold transition-colors border-b border-blue-200 last:border-0 ${
                  activeYear === year
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Middle Content */}
          <div className="w-full md:w-1/3 p-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Company <span className="font-light">started</span>
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Welcome to Industry, a leading industry innovator with a rich
              history of excellence. With a passion for precision and a
              commitment to quality, we have been empowering industries and
              driving progress.
            </p>
            <ul className="space-y-4">
              {[
                "Quality Control System",
                "Building Quality Industrial",
                "Environmental Responsibility",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-800 font-semibold"
                >
                  <CheckCircle2 className="text-orange-500" size={20} /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/3 p-6">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop"
              alt="Historical Industrial work"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
  );
};

export default HistorySection;