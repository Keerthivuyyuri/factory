import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      title: "Contact",
      value: "+1.809.120.670",
      icon: <Phone size={24} />,
    },
    {
      title: "E-mail",
      value: "info@domainname.com",
      icon: <Mail size={24} />,
    },
    {
      title: "Our Address",
      value: "37 San Juan Lane Graaf Florisstraat 22A, 3021 CH",
      icon: <MapPin size={24} />,
    },
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
          <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Home <span className="text-orange-500 px-2">•</span> 
             <span className="text-orange-500">Contact Us</span>
          </p>
        </div>
      </section>

      {/* 2. Contact Details & Form Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-2">CONTACT US</h3>
          <h2 className="text-4xl font-bold mb-6">Get in touch with us</h2>
          <p className="text-gray-600 mb-10">
            Reach out for any inquiries, support, or to discuss how we can meet
            your industrial needs.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                {/* Orange background icon container */}
                <div className="bg-orange-500 p-4 rounded text-white shadow-md">
                  {item.icon}
                </div>
                {/* Text content */}
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold mb-6">Contact me</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter first name"
              className="p-3 border rounded w-full"
            />
            <input
              type="text"
              placeholder="Enter last name"
              className="p-3 border rounded w-full"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your e-mail"
            className="w-full p-3 border rounded mb-4"
          />
          <input
            type="tel"
            placeholder="Enter your phone no."
            className="w-full p-3 border rounded mb-4"
          />
          <textarea
            placeholder="Write Message"
            className="w-full p-3 border rounded h-32 mb-4"
          ></textarea>
          <button className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition">
            Submit Message
          </button>
        </form>
      </div>

      {/* Map Placeholder */}
      <div className="w-full mt-10 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.539678129094!2d-0.12171358422973715!3d51.5033240796364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f317d4032d84!2sLondon+Eye!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
