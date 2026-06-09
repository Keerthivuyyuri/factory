import { ArrowRight, CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
   <section className="py-24 px-6 md:px-24 bg-white text-gray-900">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             {/* Overlapping Images Container */}
             <div className="relative w-full h-[550px]">
               {/* 1. Background Image (Robotic Arm) - Positioned Top-Left */}
               <div className="absolute top-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-xl z-0">
                 <img
                   src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600&auto=format&fit=crop"
                   alt="Robotic arm"
                   className="w-full h-full object-cover"
                 />
               </div>
   
               {/* 2. Experience Badge - Transparent with text shadow for visibility */}
               <div className="absolute top-[5%] left-[55%] flex items-center gap-5 z-10 ml-4">
                 <span className="text-5xl font-extrabold text-[#FF6600] drop-shadow-md">
                   25+
                 </span>
                 <span className="text-sm font-semibold text-black leading-tight max-w-[80px] drop-shadow-md">
                   Year Of <br /> Experience
                 </span>
               </div>
   
               {/* 3. Foreground Image (Technician) - Positioned Bottom-Right, overlapping the first */}
               <div className="absolute bottom-0 right-0 w-[65%] h-[80%] rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white z-20">
                 <img
                   src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
                   alt="Technician"
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
   
             <div className="space-y-6">
               <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm">
                 About Us
               </h3>
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                 Building quality through <br /> industrial innovation
               </h2>
               <p className="text-gray-600 text-lg leading-relaxed">
                 At the heart of our operations is a commitment to delivering
                 superior products through cutting-edge technology and innovative
                 processes.
               </p>
               <ul className="space-y-4">
                 {[
                   "Sustainable Manufacturing",
                   "Advanced Automation",
                   "Efficient Production Processes",
                   "Reliable Delivery Services",
                 ].map((item) => (
                   <li
                     key={item}
                     className="flex items-center gap-3 font-semibold text-gray-800"
                   >
                     <CheckCircle2 className="text-orange-500" size={24} /> {item}
                   </li>
                 ))}
               </ul>
               <div className="flex items-center gap-8 pt-6">
                 {/* Learn More Button */}
                 <button className="bg-[#FF6600] hover:bg-[#e65c00] text-white px-8 py-4 rounded-sm font-bold transition flex items-center gap-2 shadow-lg">
                   Learn More <ArrowRight size={20} />
                 </button>
   
                 {/* Rating Card - Styled to match screenshot */}
                 <div className="bg-gray-50 p-6 rounded-3xl flex flex-col items-center justify-center shadow-sm border border-gray-100">
                   <div className="text-[#FFB800] text-2xl mb-1 flex gap-0.5">
                     ★★★★★
                   </div>
                   <span className="text-sm font-semibold text-gray-700 mt-5">
                     15.5K Genuine Rating
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </section>
  );
};

export default AboutSection;