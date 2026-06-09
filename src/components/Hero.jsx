import {
  ArrowUpRight,
  ShieldCheck,
  Settings,
  Cpu,
} from "lucide-react";

const Hero = () => {

  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-950 text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000&auto=format&fit=crop')",
          }}
        ></div>

        {/* Subtle Radial Overlay: Darker edges, clearer center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.7)_100%)]"></div>

        {/* Content Container - Left Aligned */}
        <div className="relative z-10 px-6 md:px-24 max-w-5xl flex flex-col items-start text-left">
          {/* Headline */}
          <div className="relative z-10 flex items-center h-full">
            <div className="max-w-[720px] ml-[60px]">
              {/* Heading */}
              <h1 className="text-[64px] md:text-[72px] leading-[1.05] tracking-[-2px] mb-8">
                <span className="font-[300] text-white">
                  Excellence innovating
                </span>
                <br />
                <span className="font-bold text-white">industry for today</span>
              </h1>

              <p className="max-w-[620px] text-[18px] leading-[32px] text-white/80 mb-14">
                At the heart of our operations is a commitment to delivering
                superior products through cutting-edge technology and innovative
                processes.
              </p>

              <button className="group flex items-center overflow-hidden rounded-sm bg-white shadow-lg mb-8">
                <span className="px-6 py-3 text-[14px] font-medium text-black">
                  Explore More
                </span>

                <span className="bg-[#f59e0b] px-3 py-3 text-white flex items-center justify-center">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>

          {/* Feature Bar */}
          <div className="flex flex-col md:flex-row gap-12 border-t border-gray-700/50 pt-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-orange-500" size={28} />
              <span className="font-semibold text-lg">
                Advanced Manufacturing Solutions
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Settings className="text-orange-500" size={28} />
              <span className="font-semibold text-lg">
                Quality Assurance Systems
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="text-orange-500" size={28} />
              <span className="font-semibold text-lg">
                State-of-the-Art Technology
              </span>
            </div>
          </div>
        </div>
      </section>    
    </>
  );
};

export default Hero;
