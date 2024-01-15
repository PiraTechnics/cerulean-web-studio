/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

"use client";

import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { contactInformation } from "@/app/data";
import { FormEvent } from "react";

export const ContactForm = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    alert("Still need to implement this!");
  };

  return (
    <div
      id="margin-wrapper"
      className="relative isolate bg-cws-bg-2/30 rounded-lg mt-24 text-slate-100"
    >
      <div
        id="content-container"
        className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2"
      >
        <div
          id="content-left"
          className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div
              id="dark-overlay"
              className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden  bg-cws-bg-2/50 ring-1 ring-cws-bg-2/50 lg:w-1/2 rounded-l-lg"
            ></div>
            <h2 className="text-5xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 ">
              Call or email us today to schedule a free consultation. <br /> Let
              us bring your idea to life!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  {contactInformation.address}
                  <br />
                  {contactInformation.city}, {contactInformation.state}{" "}
                  {contactInformation.zip}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:underline" href="tel:+1 (555) 234-5678">
                    {contactInformation.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-white"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:underline"
                    href="mailto:hello@example.com"
                  >
                    {contactInformation.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          id="content-right"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 font-sans"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-slate-100 shadow-sm bg-gradient-to-r from-cws-primary/90 to-cws-bg-1/90 ring-cws-bg-1 hover:from-cws-primary/100 hover:to-cws-bg-1/100"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
