import {
  CircleStackIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  ViewColumnsIcon,
} from "@heroicons/react/24/outline";

export const pageLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export const contactInformation = {
  location: "Los Angeles",
  address: "420 Nowhere Street, Suite 690",
  city: "Sherman Oaks",
  state: "CA",
  zip: "91411",
  email: "fakename@testmail.net",
  phone: "(555) 555-5555",
};

export const pricingInformation = {
  header: {
    superscript: "Full-featured",
    title: "Business & Portfolio Websites",
  },
  features: [
    {
      name: "Fast & Responsive",
      icon: RocketLaunchIcon as HeroIcon,
      description:
        "Developed on modern web frameworks, our sites are speedy and beautiful on any screen, no matter the size.",
    },
    {
      name: "5 Pages Included",
      icon: ViewColumnsIcon as HeroIcon,
      description:
        "Choose from a variety of templates, or build from scratch! Additional pages can be added anytime, starting at $100/page.",
    },
    {
      name: "Managed Hosting",
      icon: CircleStackIcon as HeroIcon,
      description:
        "Reliable and secure web hosting provided on a monthly basis; uptime monitoring and technical support included.",
    },
    {
      name: "Easy to Edit",
      icon: PencilSquareIcon as HeroIcon,
      description:
        "Includes a lightweight Content Management System (CMS) tailored to your needs, making editing content a breeze!",
    },
  ],
  featureChecklist: [
    "Full Custom Design",
    "High Performance",
    "Mobile & Desktop",
    "SEO Friendly",
    "On-Call Support",
    "Affordable Add-ons",
  ],
  pricing: {
    header: "Site Design & Hosting",
    options: [
      {
        value: "flatrate",
        label: "Flat Rate",
        price1: "$1499",
        subLabel1: "One-Time",
        price2: "$5",
        subLabel2: "Per Month",
      },
      {
        value: "subscription",
        label: "Subscription",
        price1: "$149",
        subLabel1: "Per Month",
      },
    ],
  },
  addOns: [
    {
      name: "E-Commerce",
      value: "ecommerce",
      price1: "$1000",
      icon: ShoppingBagIcon as HeroIcon,
      description:
        "Turn your site into a digital storefront with the power of digital commerce integration! Use with your own Shopify account.",
    },
    {
      name: "Blog",
      value: "blog",
      price1: "$200",
      price2: "$40",
      label2: "Per Month",
      icon: DocumentTextIcon as HeroIcon,
      description:
        "Create and edit your own articles easily with a stylish minimalist blogging interface.",
    },
    {
      name: "Extra Page",
      value: "extrapage",
      price1: "$100",
      icon: DocumentDuplicateIcon as HeroIcon,
      description:
        "Add more content to your site! Additional design consultation provided at no charge.",
    },
    {
      name: "Managed Domain Name",
      value: "manageddomain",
      price1: "$5",
      price2: "$5",
      label1: "Per Month",
      label2: "Per Month",
      icon: GlobeAltIcon as HeroIcon,
      description:
        "No domain name? No Problem! We'll handle the work of purchasing and configuring everything to work with your site.",
      subDescription:
        "*Price estimated from registrar rates. Includes cost of 1-year purchase of available domain of choice. Domain transfers to customer upon cancellation.",
    },
  ],
};
