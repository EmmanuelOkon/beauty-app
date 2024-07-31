import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Quote from "@/components/Quote";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-red400">
        <Hero />
        <Quote />

      </div>
    </>
  );
}
