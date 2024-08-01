import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Makeup from "@/components/Makeup";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Quote from "@/components/HomeBooking";
import ServicesSection from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";
import HomeBooking from "@/components/HomeBooking";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesSection />
      {/* <Quote /> */}
      {/* <Makeup /> */}
      <Products />
      <Testimonials />
      <HomeBooking />
    </>
  );
}
