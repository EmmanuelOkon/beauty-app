import Image from "next/image";
import React from "react";

const services = [
  { icon: "spa", label: "Spa" },
  { icon: "makeup", label: "Hair Makeup" },
  { icon: "waxing", label: "Waxing" },
  { icon: "facial", label: "Facial" },
  { icon: "massage", label: "Massage" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 header">Our Services</h2>
        <p className="text-gray-700 mb-8">
          Spread over two floors, our beautiful spa offers a soothing
          environment in which you can rest, relax, and feel completely
          rejuvenated.
        </p>
        <p className="text-gray-600 max-w-5xl mx-auto mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It remained essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-between max-w-5xl mx-auto relative">
          {/* SVG Line */}
          <svg
            className="hidden md:flex md:absolute inset-x-0 top-[40%] -translate-y-1/2 w-full h-[0.8px] "
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="0.5"
              x2="100"
              y2="0.5"
              stroke="gray"
              strokeWidth="0.5"
            />
          </svg>
          {services.map((service) => (
            <>
              <div key={service.label} className="text-center relative z-10">
                <div className="bg-gray-300 rounded-full p-6 inline-block">
                  <Image
                    width={1000}
                    height={1000}
                    src={`/assets/images/${service.icon}.png`}
                    alt={service.label}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold header">
                  {service.label}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
