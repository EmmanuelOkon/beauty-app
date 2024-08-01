import React from "react";
import Navbar from "./Navbar";
import { Icons } from "../public/assets/icons";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-[#FEF3E2]  h-full  2xl:h-[1024px] ">
      {/* <Navbar /> */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10 xl:px-0 ">
        <section className=" max-h-[1024px] ">
          <div>
            <span className="text-[18px]  ">We can help your problem</span>
            <h1 className="text-primary header font-bold text-[46px] lg:text-[75px] leading-none tracking-normal relative max-w-[636px] ">
              Maximize your bright&nbsp;face&nbsp;with clean skin{" "}
              <span className="absolute -bottom-4 md:bottom-0 w-10  ">
                <Icons.sun className="w-10 " />
              </span>{" "}
            </h1>
            <p className="pt-5 text-[18px] max-w-[573px] text-[#565656] ">
              Get a skinseed product right away to make your skin bright again.
              suitable for those of you who often go out in the sun using a
              cream that doesn&apos;t fade easily
            </p>
          </div>

          <div className="flex items-center flex-col md:flex-row mt-6 gap-6">
            <Button
              className="bg-[#221E42] w-full md:w-[185px] p-2 rounded-none text-white hover:bg-transparent hover:text-[#221E42] border-2 border-[#221E42] "
              size="lg"
            >
              <Link href="/">Get Started</Link>
            </Button>

            <Button
              asChild
              className="mt6 md:mt0 w-full md:w-[185px] flex rounded-none border-2 border-primary p-2 bg-transparent text-[18px] text-primary group hover:text-white"
              size="lg"
            >
              <Link
                href="/"
                className="flex gap-2 text-primary group-hover:text-white"
              >
                <Icons.ShoppingBag className="text-primary group-hover:text-white w-6 h-6" />
                Order Now
              </Link>
            </Button>
          </div>
        </section>
        <Image
          src="/assets/images/heroImg.png"
          width={1000}
          height={1000}
          alt="heroImg"
          className="w-[479px] h-full  "
        />
      </section>
    </div>
  );
};

export default Hero;
