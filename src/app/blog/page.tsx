import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";
import Blog from "@/components/Blog/Blog";

export default function Contactpage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Blog />
      <Slider />
      <Footer />
    </main>
  );
}
