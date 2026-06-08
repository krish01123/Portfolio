import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import Logo from "@/components/Home/Logo";
import Navbar from "@/components/Home/Navbar";
import Review from "@/components/Home/Review";
import SelectedWork from "@/components/Home/SelectedWork";
import Self from "@/components/Home/Self";
import Service from "@/components/Home/Service";
import Slider from "@/components/Home/Slider";
import WebsiteProcess from "@/components/Home/WebsiteProcess";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Logo />
      <Service />
      <SelectedWork />
      <WebsiteProcess />
      <Review />
      <Self />
      <Slider />
      <Footer />
    </main>
  );
}
