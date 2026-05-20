import Hero from "@/components/Hero"
import Vision from "@/components/Vision";
import Newsletter from "@/components/Newsletter"
import About from "@/components/About";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowitWorks";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <Mission />
      <HowItWorks />
      <Newsletter />     
    </>
  );
}