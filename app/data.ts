import {
  CircleStackIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  DocumentDuplicateIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  //ShoppingBagIcon,
  ViewColumnsIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import DevinYounge from "@/public/portfolio/DevinYounge.png";
import Gelato1022 from "@/public/portfolio/1022Gelato.png";
import BuyRule from "@/public/portfolio/BuyRule.png";
import BardsBookshelf from "@/public/portfolio/BardsBookshelf.png";

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
  address: "5632 Van Nuys Blvd #4047",
  city: "Sherman Oaks",
  state: "CA",
  zip: "91401",
  email: "devin@ceruleanwebstudio.com",
  botEmail: "autobot@ceruleanwebstudio.com",
  phone: "(760) 576-7555",
};

export const services = [
  {
    name: "Web Design",
    link: "design",
    icon: PaintBrushIcon as HeroIcon,
    description:
      "We build beautiful and bespoke websites for a variety of clients -- from small businesses, to artists, writers, musicians, and more. We'll work with you to turn your ideas and requirements into a functional and fast website with a personal touch. No matter what your needs, Cerulean Web Studio can make your dreams a digital reality.",
  },
  {
    name: "Mobile Optimization",
    link: "mobile",
    icon: DevicePhoneMobileIcon as HeroIcon,
    description:
      "Have you ever tried to access a website on your phone, only to see a microscopic version of what it looks like on a computer screen? Yikes -- That's what a website without Mobile Optimization looks like. Over half of all internet traffic today is driven by smartphones. At Cerulean Web Studio we build for the mobile experience & conventional computer screens, so your site will look beautiful on any device.",
  },
  /* Removing e-commerce until it is offered
  {
    name: "Ecommerce Integration",
    link: "ecommerce",
    icon: BanknotesIcon as HeroIcon,
  },*/
  {
    name: "Search Engine Optimization",
    link: "seo",
    icon: PresentationChartLineIcon as HeroIcon,
    description:
      "We use the latest development tools and best practices to ensure optimal settings for search engines and maximum reach for your site. We offer a free consultation for SEO with our standard Website & Hosting package.",
  },
  {
    name: "Application Development",
    link: "development",
    icon: CodeBracketIcon as HeroIcon,
    description:
      "Need something a little more complex than our standard offerings? We can build it for you! Whether you need a perfect invoicing dystem, a customer relationship management dashboard, E-Commerce for your business or more, Cerulean Web Studio is here to help. Call or Email us for a free consultation and we'll take it from there.",
  },
  {
    name: "Managed Hosting",
    link: "hosting",
    icon: CircleStackIcon as HeroIcon,
    description:
      "Not only do we design and build your site, we'll put it online for you as well! For a small monthly fee, Cerulean Web Studio provides hosting and basic maintainence as a part of our standard design package. Cancel anytime, and we'll hand the source code off to you.",
  },
  {
    name: "Updates & Maintainence",
    link: "maintainence",
    icon: WrenchScrewdriverIcon as HeroIcon,
    description:
      "What if you already have a website, and just need something changed or added? Contact us and we'll see what Cerulean Web Studio can do for you! Additionally, as a part of our Subscription package we provide updates and content management on a monthly basis.",
  },
];

export const packageDetails = {
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
};

export const packagePricing = {
  header: "Site Design & Hosting",
  options: [
    {
      value: "flatrate",
      label: "Flat Rate",
      price1: 1499,
      subLabel1: "One-Time",
      price2: 5,
      subLabel2: "Per Month",
    },
    {
      value: "subscription",
      label: "Subscription",
      price1: 149,
      subLabel1: "Per Month",
    },
  ],
  addOns: [
    /* Remove E-Commerce until ready to offer service
    {
      name: "E-Commerce",
      value: "ecommerce",
      price1: 1000,
      icon: ShoppingBagIcon as HeroIcon,
      description:
        "Turn your site into a digital storefront with the power of digital commerce integration! Use with your own Shopify account.",
    }, */
    {
      name: "Blog Section",
      value: "blog",
      price1: 200,
      price2: 40,
      label2: "Per Month",
      icon: DocumentTextIcon as HeroIcon,
      description:
        "Create and edit your own articles easily with a stylish minimalist blogging interface.",
    },
    {
      name: "Extra Page",
      value: "extrapage",
      price1: 100,
      icon: DocumentDuplicateIcon as HeroIcon,
      description:
        "Add more content to your site! Additional design consultation provided at no charge.",
    },
    {
      name: "Domain Name",
      value: "manageddomain",
      price1: 30,
      price2: 4,
      label1: "Annually",
      label2: "Per Month",
      icon: GlobeAltIcon as HeroIcon,
      description:
        "No domain name? No Problem! We'll handle the work of purchasing and configuring everything to work with your site.",
      subDescription:
        "*Price estimated from registrar rates. Includes cost of 1-year purchase of available domain of choice. Domain transfers to customer upon cancellation.",
    },
  ],
};

export const PortfolioCards = [
  {
    src: Gelato1022,
    id: "1022gelato",
    link: "https://sparkly-klepon-d0912d.netlify.app/",
    alt: "1022 Cafe & Gelateria, in Oceanside, California",
  },
  {
    src: BardsBookshelf,
    id: "bardsbookshelf",
    link: "https://bardsbookshelf.com/",
    alt: "Bard's Bookshelf, a blog of verse and versatility",
  },
  {
    src: DevinYounge,
    id: "devinyounge",
    link: "https://devinyounge.com",
    alt: "Devin Younge, Full-Stack Web Developer Portfolio",
  },
  {
    src: BuyRule,
    id: "buyrule",
    link: "https://gregarious-phoenix-51a442.netlify.app/",
    alt: "Buy-Rule, Hyrule's one stop shop for adventuring gear and more",
  },
];
