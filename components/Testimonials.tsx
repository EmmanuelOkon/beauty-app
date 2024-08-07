import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out in the sun! I'm waiting for an amazing new product",
    img: "/assets/images/customer1.png",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out in the sun! I'm waiting for an amazing new product",
    img: "/assets/images/customer2.png",
  },
  {
    name: "John",
    username: "@john",
    body: "Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out in the sun! I'm waiting for an amazing new product",
    img: "/assets/images/customer3.png",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out in the sun! I'm waiting for an amazing new product",
    img: "/assets/images/customer4.png",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out in the sun! I'm waiting for an amazing new product",
    img: "/assets/images/customer5.png",
  },
  {
    name: "James",
    username: "@james",
    body: "Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out in the sun! I'm waiting for an amazing new product",
    img: "/assets/images/customer6.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-full cursor-pointer overflow-hidden rounded-xl p-4  ",
        // light styles
        "border-gray-950/[.1] bg-[#f4be6b] hover:bg-[#d7bf9c] -950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm ">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section className="bg-[#FEF3E2] py-10 ">
      <h1 className="text-center header text-[32px] px-4 lg:text-[48px] text-primary md:w-2/3 lg:w-1/3 mx-auto leading-none pb-4 ">What customers say about our products</h1>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-tor from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-tol from-white dark:from-background"></div>
      </div>
    </section>
  );
}
