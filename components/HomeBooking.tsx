"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/loader";
import { cn } from "@/lib/utils";

const HomeBooking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    if (!name || !email || !phone || !message) {
      toast.error("Please fill in all required fields", {
        position: "top-center",
        duration: 5000,
      });
      setLoading(false);

      return;
    }

    try {
      const response = await fetch("https://dummy-endpoint.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
      if (response.ok) {
        setLoading(false);
        toast.success("Form submitted successfully", {
          position: "top-center",
          duration: 5000,
        });

        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        return;
      } else {
        toast.error("Failed to submit the form. Please try again.", {
          position: "top-center",
          duration: 5000,
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        duration: 5000,
      });
      throw error;
    }

    setLoading(false);
  };

  return (
    <>
      <div className="py10 px4 sm:px8 max-w7xl mx-auto">
        <div className="relative overflow-hidden z-10 justify-center items-center w-full h-[100vh] lg:h-[80vh] py-20 bg-gradient-to-b from-deepGreen via-midGrey to-deepGreen ">
          <div className="absolute  inset-0 md:flex justify-center items-center mix-blend-overlay">
            <Image
              className="w-full object-cover h-[100vh] md:h-full md:object-cover overflowhidden"
              width={1200}
              height={1200}
              alt="bookingImage"
              src="/assets/images/bookingImage.png"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-50 h[100vh] ">
            <div className="z-[100] w-fit">
              <div className=" pb-8 py-4 px-4">
                <div className="text-center max-w[520px] mx-auto py-4 lg:py-8  ">
                  <h1 className="text-white text-[20px] lg:text-3xl font-bold ">
                    Make An Appointment
                  </h1>
                  <p className="text-white text-base py-6 max-w-[360px] mx-auto tracking-wider">
                    Please fill out the form below to schedule an appointment
                    with our beauty experts.
                  </p>
                  <div className="flx text-left max-w-[780px] mx-auto ">
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-wrap justify-between ">
                        <div className="w-full md:w-[48%] mb-6 md:mb-0">
                          <label
                            className="block tracking-wide text-white text-sm font-semibold mb-2"
                            htmlFor="Name"
                          >
                            Name
                          </label>
                          <input
                            className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-none py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:bg-white focus:border-primary-500 placeholder:text-[#98A2B3] capitalize"
                            placeholder="Name"
                            id="name"
                            type={name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="w-full md:w-[48%] ">
                          <label
                            className="block tracking-wide text-white text-sm font-semibold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-none py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:bg-white focus:border-primary-500 placeholder:text-[#98A2B3] capitalize"
                            id="email"
                            type={email}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-between  ">
                        <div className="w-full md:w-[48%] mb-6 md:mb-0">
                          <label
                            className="block tracking-wide text-white text-sm font-semibold mb-2"
                            htmlFor="phone"
                          >
                            Phone Number
                          </label>
                          <input
                            className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-none py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:bg-white focus:border-primary-500 placeholder:text-[#98A2B3] capitalize"
                            id="phone"
                            type="tel"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div className="w-full md:w-[48%] ">
                          <label
                            className="block tracking-wide text-white text-sm font-semibold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <input
                            className="appearance-none font-semibold block w-full bg-white text-greyBlack placeholder:font-medium border-2 border-gray-200 rounded-none py-3 px-4 mb-3 leading-tight focus:outline-0 focus:ring-0 focus:bg-white focus:border-primary-500 placeholder:text-[#98A2B3] capitalize"
                            id="message"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="mt-8 text-center">
                        <button
                          type="submit"
                          className={cn(
                            loading
                              ? " w-[190px] h-[52px]"
                              : "bg-green text-white hover:bg-white hover:text-green hover:borderblue ",
                            "border-green text-base rounded-none focus:outline-none focus:shadow-outline border-2 hover:border-primary-500 font-semibold transition-all"
                          )}
                        >
                          {loading ? (
                            <>
                              <div className="bg-white h-[52px] rounded-none w-[190px] py-0 my-0 flex items-center justify-center">
                                <Loading />
                              </div>
                            </>
                          ) : (
                            <div className="w-fit hover:rounded-none hover:border-blue py-3 px-10 bg-green text-white hover:bg-white hover:text-primary-500">
                              Send message
                            </div>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBooking;
