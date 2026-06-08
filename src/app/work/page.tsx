import Footer from "@/components/Home/Footer";
import Work from "@/components/Work/Work";
import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";

export default function Workpage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Work />
      <Slider />
      <Footer />
    </main>
  );
}
