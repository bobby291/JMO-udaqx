import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Categories from "@/components/Categories"
import Works from "@/components/Works";
import Pricing from "@/components/Pricing"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Works />
      <Pricing />
      <Newsletter /> 
      <Footer />
    
    </>
  );
}