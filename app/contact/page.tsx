import { ContactForm } from "@/app/ui/sections/contact-form";
import { Metadata } from "next";
import { SEO } from "../data";

export const metadata: Metadata = {
  title: "Contact Us" + " | " + SEO.siteName,
};

export default function Contact() {
  return <ContactForm />;
}
