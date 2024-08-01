import Image from "next/image";
import React from "react";
import { LayoutGrid } from "./LayoutGrid";
import { Icons } from "@/public/assets/icons";

const cards = [
  {
    id: 1,
    content: <div>Card 1 Content</div>,
    className: "bg-red-500",
    thumbnail: "/assets/images/ladyOne.png",
  },
  {
    id: 2,
    content: <div>Card 2 Content</div>,
    className: "bg-blue-500",
    thumbnail: "/assets/images/ladyTwo.png",
  },
  {
    id: 3,
    content: <div>Card 3 Content</div>,
    className: "bg-green-500",
    thumbnail: "/assets/images/ladyOne.png",
  },
];

const Quote = () => {
  return (
    <div className="wrapper overflowhidden max-h- ">
      <div className="text-center mx-auto max-w-[1128px] lg:py-10 ">
        <div className="flex justify-end pr-44 ">
          <Image
            src="/assets/images/quoteBall.png"
            width={100}
            height={100}
            alt="quoteBall"
            className="w-[67px] h-auto "
          />
        </div>
        <p className="text-4xl max-w-[896px] mx-auto text-primary leading6 tracking-wider wordspacing ">
          Beauty is part of women&apos;s privileges still do body care to always
          maintain your beautiful features. Let&apos;s join other women to get
          products from the latest Brand.
        </p>
        <div className="flex justify-start pl-56 ">
          <Image
            src="/assets/images/quoteBall.png"
            width={100}
            height={100}
            alt="quoteBall"
            className="w-[67px] h-auto"
          />
        </div>
      </div>
      <section className="flex justify-between gap-6 items-center lg:py-10 ">
        <div className="relative">
          <div className="relative ml-10 mt-10">
            <div className="hidden relative -left-4 -top-16 lg:flex ">
              <Icons.Ellipse className="text-transparent bg-none" />
            </div>
            <div className="w-[425px] h-auto absolute -top-4 left-20 ">
              <Image
                src="/assets/images/ladyOne.png"
                width={1500}
                height={1500}
                alt="ladyOne"
                // className="w-[425px] h-auto absolute -top-4 left-20 "
              />

              <div className="max-w-[396px] ">
                <p className="header text-[48px] text-[#221E42] ">02</p>
                <p className="text-left max-w-[396px] text-[#565656] ">
                  Brand can last for 24 hours to keep your skin white. use brand
                  regularly to get white skin
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative ml10 mt10">
            <div className="hidden relative left-0 top-16 lg:flex ">
              <Icons.Flower className="text-transparent bg-none" />
            </div>
            <div className="w-[425px] h-auto absolute top-0 right-20 ">
              <div className="max-w-[396px] ">
                <p className="header text-[48px] text-[#221E42] leading-none pb-10 ">
                  Beauty is part of the privilege of women
                </p>
              </div>

              <div className="max-w-[396px] ">
                <p className="header text-[48px] text-[#221E42] ">01</p>
                <p className="text-left max-w-[396px] text-[#565656] ">
                  Consumption of skinseed products to maintain skin moisture
                  from the sun
                </p>
              </div>
              <Image
                src="/assets/images/ladyTwo.png"
                width={1500}
                height={1500}
                alt="ladyOne"
                // className="w-[425px] h-auto absolute -top-4 left-20 "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
