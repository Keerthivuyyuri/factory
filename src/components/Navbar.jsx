import { Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto h-[72px] px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-[34px] h-[34px] bg-[#f59e0b] rounded-md flex items-center justify-center">
            <span className="text-black text-sm font-bold">⚒</span>
          </div>

          <h1 className="text-white text-[16px] font-semibold">FactoryPro</h1>
        </div>

        {/* Menu */}
        <nav>
          <ul className="hidden lg:flex items-center gap-10 text-[13px] text-white">
            <li>
              <Link to="/" className="text-[#f59e0b] font-medium">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-[#f59e0b] transition">
                About Us
              </Link>
            </li>
            
            {/* Dropdown Container */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[#f59e0b] transition">
                Services <ChevronDown size={12} strokeWidth={2.5} />
              </button>

              {/* Dropdown List - hidden by default, visible on hover */}
              {/* <ul className="absolute top-full left-0 mt-2 bg-white text-black p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-32"> */}
              <ul className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li>
                  <Link
                    to="/services"
                    className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500 rounded"
                  >
                    Customservices
                  </Link>
                </li>
                {/* Add more links here later */}
              </ul>
            </li>

            <li>
              <Link to="/blog" className="hover:text-[#f59e0b] transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-[#f59e0b] transition">
                Projects
              </Link>
            </li>

            {/* Dropdown Container */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[#f59e0b] transition">
                Page <ChevronDown size={12} strokeWidth={2.5} />
              </button>

              {/* Dropdown List - hidden by default, visible on hover */}
              {/* <ul className="absolute top-full left-0 mt-2 bg-white text-black p-2 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-32"> */}
              <ul className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li>
                  <Link
                    to="/pricing"
                    className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-500 rounded"
                  >
                    Pricing
                  </Link>
                </li>
                {/* Add more links here later */}
              </ul>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Phone */}
        <div className="hidden lg:flex items-center gap-2">
          <Phone size={16} className="text-[#f59e0b]" strokeWidth={2} />
          <span className="text-white text-[15px] font-medium">
            +01123456789
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
