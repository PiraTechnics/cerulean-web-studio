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
  CheckIcon,
} from "@heroicons/react/24/outline";
import { contactInformation } from "@/app/data";
import { Fragment, ChangeEvent, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Spinner } from "../components/spinner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); //loading state, disable submit button

    console.log(formData);

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      }),
    });

    //clear form and show message to indicate it was submitted successfully
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });

    setModalOpen(true); //open confirmation dialog
    setLoading(false); //re-enable submit button when done
  }

  const ContactConfirmation = () => {
    return (
      <Transition.Root show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setModalOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-slate-900"
                      >
                        Message Sent
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-slate-600">
                          Your request has been succuessfully emailed to us.
                          Keep an eye out for a reply in the next 48 hours!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 flex justify-center">
                    <button
                      type="button"
                      className="justify-center rounded-md bg-cws-bg-2 px-4 py-2 font-semibold text-white shadow-sm hover:bg-cws-bg-1 focus-visible:outline focus-visible:outline-cws-bg-2"
                      onClick={() => setModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
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
        <div id="content-right">
          <form
            action="#"
            method="POST"
            onSubmit={handleSubmit}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 font-sans"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold leading-6"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold leading-6"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
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
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold leading-6"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
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
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cws-bg-2 sm:text-sm sm:leading-6 text-black dark:text-slate-100 dark:bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-slate-100 shadow-sm bg-gradient-to-r from-cws-primary/80 to-cws-bg-1/80 ring-cws-bg-1 hover:from-cws-primary/100 hover:to-cws-bg-1/100 hover:ring-1"
                  disabled={loading === true}
                >
                  {loading === true ? (
                    <div className="flex gap-2 items-center">
                      <Spinner />
                      <div>Sending...</div>
                    </div>
                  ) : (
                    "Send message"
                  )}
                </button>
              </div>
            </div>
          </form>
          <ContactConfirmation />
        </div>
      </div>
    </div>
  );
};
