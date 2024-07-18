import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/mainSection";
import Logos from "./components/logos";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <div className="bg-[#0a1938] ">
      <Navbar />
      <HeroSection />
      <Logos />
      <About/>
      <Projects/>
      <Experience/>
      <Testimonial/>
    </div>
  );
}
