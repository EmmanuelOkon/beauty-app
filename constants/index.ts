import { Icons } from "@/public/assets/icons";

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Consultant",
    route: "#",
  },
  {
    label: "Services",
    route: "/services",
  },
  {
    label: "Bookings",
    route: "/bookings",
  },
  {
    label: "Our Stylists",
    route: "/stylists",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};

export const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  links: [
    { name: "Home", href: "#" },

    { name: "Consultant", href: "#" },
    { name: "Hand body", href: "#" },

    { name: "Products", href: "#" },
    { name: "Skin Care", href: "#" },

    { name: "Shop", href: "#" },
    { name: "Terms of Service", href: "#" },

    { name: "Our Stylists", href: "/stylists" },
    { name: "Skincare", href: "#" },

    { name: "Oils", href: "#" },
    { name: "Facewash", href: "#" },

    { name: "Delivery", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Instagram",
      href: "/",
      icon: Icons.Instagram,
    },
    {
      name: "Facebook",
      href: "/",
      icon: Icons.FaceBookIcon,
    },
    {
      name: "Mail",
      href: "/",
      icon: Icons.MailIcon,
    },
  ],
};

export const products = [
  {
    id: 1,
    name: "Tagea Cream",
    image: "product1",
    percent: "30%",
    price: 53.22,
    discount: "$80.22",
    star: 4.8,
  },
  {
    id: 2,
    name: "Solid Black Cream",
    image: "product2",
    percent: "20%",
    price: 83.52,
    discount: "$103.52",
    star: 4.8,
  },
  {
    id: 3,
    name: "Pingky Cream",
    image: "product3",
    percent: "20%",
    price: 53.25,
    discount: "$73.25",
    star: 4.7,
  },
  {
    id: 4,
    name: "Navy Cream",
    image: "product4",
    percent: "20%",
    price: 38.82,
    discount: "$58.82",
    star: 4.8,
  },
  {
    id: 5,
    name: "Green Light Cream",
    image: "product5",
    percent: "30%",
    price: 43.82,
    discount: "$73.82",
    star: 4.8,
  },
  {
    id: 6,
    name: "Wash Cream",
    image: "product6",
    percent: "30%",
    price: 34.22,
    discount: "$74.49",
    star: 4.8,
  },
];

export const stylists = [
  {
    id: 1,
    name: "Mattie Joshef",
    role: "Dermatologist",
    image: "stylist1",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Hairstylists",
    image: "stylist2",
  },
  {
    id: 3,
    name: "Rachel Patel",
    role: "Estheticians/ Skincare Specialists",
    image: "stylist3",
  },
];
