import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ONLY PLACE WHERE OFFSET EXISTS */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};
export default MainLayout;