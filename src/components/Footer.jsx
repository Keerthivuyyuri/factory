import { FaPinterest, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#181818] text-white overflow-hidden">
      {/* Background Building Image */}
      <div
        className="absolute bottom-0 left-0 w-[320px] h-[180px] opacity-[0.08] bg-contain bg-no-repeat bg-left-bottom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')",
        }}
      />

      <div className="max-w-[1150px] mx-auto px-[90px] pt-[55px] pb-[22px] relative z-10">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-[36px] font-light leading-none tracking-[-0.5px]">
              Ready to work with us?
            </h2>

            <p className="text-[#9a9a9a] text-[12px] mt-[12px] max-w-[480px] leading-[20px]">
              Join us to experience cutting edge industrial solutions that drive
              innovation, testing success.
            </p>
          </div>

          {/* Circle Button */}
          <button className="w-[74px] h-[74px] rounded-full bg-[#ff9d00] flex items-center justify-center border-[6px] border-[#ffb12e]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H9M17 7V15"
              />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-[#2a2a2a] mt-[38px] mb-[42px]" />

        {/* Footer Links */}
        <div className="grid grid-cols-[2.2fr_1fr_1fr_1.2fr] gap-x-[70px]">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#ff9d00] rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">⚡</span>
              </div>

              <span className="font-semibold text-[18px]">FactoryPro</span>
            </div>

            <p className="text-[#9d9d9d] text-[12px] leading-[22px] mt-[18px] max-w-[230px]">
              We are committed to providing personalized industrial solutions.
            </p>

            <div className="flex gap-[18px] mt-[22px] text-[#ff9d00]">
              <FaPinterest className="text-sm cursor-pointer" />
              <FaFacebook className="text-sm cursor-pointer" />
              <FaInstagram className="text-sm cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-medium mb-[18px]">Quick Links</h4>

            <ul className="space-y-[12px] text-[12px] text-[#9d9d9d]">
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Security */}
          <div>
            <h4 className="text-[14px] font-medium mb-[18px]">Security</h4>

            <ul className="space-y-[12px] text-[12px] text-[#9d9d9d]">
              <li>Term & Condition</li>
              <li>Privacy Policy</li>
              <li>Help</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[14px] font-medium mb-[18px]">Contact</h4>

            <div className="space-y-[12px] text-[12px] text-[#9d9d9d] leading-[20px]">
              <p>+91 123554789</p>
              <p>info@yourname.com</p>
              <p>
                520, West Valley, Amin and
                <br />
                minim
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#2a2a2a] mt-[40px]" />

        {/* Copyright */}
        <div className="text-center text-[11px] text-[#8a8a8a] pt-[18px]">
          Copyright © 2024 All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
