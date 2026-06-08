import Footer from "@/components/Home/Footer";
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";

export default function Contactpage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Contact />
      <Slider />
      <Footer />
    </main>
  );
}
