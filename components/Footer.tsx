"use client";

import React, { useState } from "react";

import { toast } from "sonner";
// import Loading from "./loader";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/constants";
// import { LucideMail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const warning = () =>
    toast.warning("Please enter a valid email address", {
      position: "top-center",
      duration: 3000,
    });

  const success = () =>
    toast.success("Thank you for subscribing to our newsletter", {
      position: "top-center",
      duration: 3000,
    });

  const failed = () =>
    toast.error("Could not subscribe at this time, check your internet", {
      position: "top-center",
      duration: 3000,
    });

  function isValidEmailFormat(email: any) {
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    if (!email || email.trim() === "") {
      warning();
      setLoading(false);
      return;
    } else if (!email.includes("@")) {
      warning();
      setLoading(false);
      return;
    } else if (!isValidEmailFormat(email)) {
      warning();
      setLoading(false);
      return;
    } else {
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          success();

          setEmail("");
          setLoading(false);
        } else {
          if (response instanceof TypeError || response instanceof Error) {
            console.error("Network error:", response.message);
            failed();
          } else {
            console.error("Failed to subscribe:", response.statusText);
            failed();
          }
        }
      } catch (error) {
        failed();
        console.error("Error during subscription:", error);
        setLoading(false);
      }
    }
  };

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <footer className="bg-primary-blue" aria-labelledby="footer-heading">
      <div className="lg:max-w-7xl 2xl:max-w-[1560px] mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols3 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div>
                <Link href="/">
                  <Image
                    alt="logo"
                    width={1200}
                    height={1200}
                    src="/assets/images/beautyWhiteLogo.png"
                    className="w-[30%] lg:w-[60%] h-auto"
                  />
                </Link>
                <div className="my-4 text-white">
                  <p className="block flex-shrink-0 font-normal">
                    KK 621 St, Kigali, Rwanda, Gikondo
                  </p>
                  <Link
                    href="tel:+250786416032"
                    className="block flex-shrink-0"
                  >
                    +250233883032
                  </Link>
                  <Link href="/" className="block flex-shrink-0">
                    info@skinseed.com
                  </Link>
                </div>
                <div className="  ">
                  {/* <p className="text-white pb-2">Follow us</p> */}
                  <div className="flex items-center space-x-4">
                    {navigation.social.map((item) => {
                      const Icon = item.icon; // Assign the icon component to a variable
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-white hover:textgrey-600 bg-primary-500 hover:bg-primary p-2 rounded-full"
                        >
                          {Icon && (
                            <Icon className="h-6 w-6" aria-hidden="true" />
                          )}{" "}
                          {/* Render the icon component */}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-2xl font-semibold text-white tracking-wider">
                  Useful Links
                </h3>

                <div className="h-[200px] md:w-[340px]">
                  <ul className="mt-4 flex flex-wrap justify-between">
                    {navigation.links.map((item) => (
                      <li key={item.name} className="basis-1/2 py-[0.5rem] ">
                        <Link
                          href={item.href}
                          className="text-base font-normal text-white hover:text-primary-500"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 xl:mt-0">
            <h3 className="text-xl lg:text-2xl font-semibold text-white tracking-wider">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-4 text-base text-white">
              Signup to our newsletter to get update information, news, insight
              or promotions.
            </p>
            <form className="mt-4 " onSubmit={handleSubmit}>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 mb-4">
                <input
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none min-w-0 w-full py-2 pl-2 bg-transparent shadow-sm text-base text-white placeholder-gray-500 outline-0 ring-0 border-0 focus:outline-0 focus:ring-0 focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-3 rounded-md sm:mt-0 sm3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className={classNames(
                    loading
                      ? " w-[150px] h[22px] px4 py2 bg-lemonGreen"
                      : "bg-primary-500 text-white hover:bg-lemonGreen hover:text-green py-2 ",
                    "w-1/3 flex items-center justify-center border border-transparent rounded-md text-base font-medium  hover:bg-primary hover:text-white focus:ring-0"
                  )}
                >
                  {loading ? (
                    <>
                      <div className="bg-primary-500 text-white h-[42px] rounded-md w-[150px] py2 my-0 flex items-center justify-center">
                        Loading
                      </div>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-primary pt-8 flex items-center justify-center">
          <p className="mt-8 text-base text-primary-500 md:mt-0">
            &copy; {new Date().getFullYear()} Skinseed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
