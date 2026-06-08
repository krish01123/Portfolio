import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import About from "@/components/About/About";
import Slider from "@/components/Home/Slider";

export default function Aboutpage() {
  return (
    <main className="bg-black">
      <Navbar />
      <About />
      <Slider />
      <Footer />
    </main>
  );
}
