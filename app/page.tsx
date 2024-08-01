import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Makeup from "@/components/Makeup";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import ServicesSection from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-red400">
        <Hero />
        <Introduction />
        <ServicesSection />
        {/* <Quote /> */}
        {/* <Makeup /> */}

        <Testimonials />
        <Footer />
      </div>
    </>
  );
}
