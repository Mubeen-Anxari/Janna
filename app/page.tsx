import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/mainSection";
import Logos from "./components/logos";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Testimonial from "./components/testimonial";
import Text from "./components/text";
import Text1 from "./components/text1";
import Pic from "./components/pic";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="bg-[#0a1938] py-10">
      <Navbar />
      <HeroSection />
      <Logos />
      <About/>
      <Projects/>
      <Experience/>
      {/* <Testimonial/>
      <Text/>
      <Text1/>
      <Pic/> */}
      <Contact/>
    </div>
  );
}
