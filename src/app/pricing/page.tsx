import Footer from "@/components/Home/Footer";

import Navbar from "@/components/Home/Navbar";
import Slider from "@/components/Home/Slider";
import Pricing from "@/components/Pricing/Pricing";

export default function Contactpage() {
  return (
    <main className="bg-black">
      <Navbar />
      <Pricing />
      <Slider />
      <Footer />
    </main>
  );
}
