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
    label: "Products",
    route: "#",
  },
  {
    label: "Shop",
    route: "#",
  },
  {
    label: "About Us",
    route: "#",
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

    // { name: "Contact Us", href: "#" },

    { name: "Consultant", href: "#" },
    { name: "Hand body", href: "#" },

    { name: "Products", href: "#" },
    { name: "Skin Care", href: "#" },

    { name: "Shop", href: "#" },
    { name: "Terms of Service", href: "#" },

    { name: "About Us", href: "#" },
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
