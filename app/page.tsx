import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Bizhub from "@/components/Bizhub";
import Academy from "@/components/Academy";
import Media from "@/components/Media";
import Works from "@/components/Works";
import Pricing from "@/components/Pricing"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Bizhub />
      <Academy />
      <Media />
      <Works />
      {/*<Pricing /> */} 
      <Newsletter /> 
      <Footer />
    
    </>
  );
}