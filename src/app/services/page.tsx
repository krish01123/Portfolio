import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";
import ServicesPage from "@/components/Services/Services";

export default function Servicespage() {
  return (
    <main className="bg-black">
      <Navbar />
      <ServicesPage />
      <Slider />
      <Footer />
    </main>
  );
}
