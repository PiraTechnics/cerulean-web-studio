"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CeruleanLogo } from "@/app/ui/icons/cerulean-logo";
import { pageLinks } from "@/app/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        id="mobile-menu-button"
        aria-label="Mobile Menu Button"
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
								h-0.5 w-6 rounded-sm ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
        ></span>
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
								h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>
        <span
          className={`bg-slate-500 block transition-all duration-300 ease-out 
								h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
        ></span>
      </button>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed top-0 left-0 flex w-2/3 h-full">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-fit">
                    <div className="flex h-full flex-col overflow-y-hidden bg-cws-secondary border-slate-300 border-2 rounded-r-md py-6 px-12 shadow-xl">
                      <Dialog.Title className="scale-125 mx-auto mb-4">
                        <CeruleanLogo />
                      </Dialog.Title>
                      <ul className="relative flex flex-col text-center gap-4 mt-6 flex-1 px-4 sm:px-6">
                        {pageLinks.map((entry) => {
                          return (
                            <li
                              key={"mobile-" + entry.name}
                              className="text-slate-700"
                            >
                              <button onClick={handleClick}>
                                <Link
                                  className={clsx("text-2xl", {
                                    "text-cws-bg-1": pathname === entry.href,
                                  })}
                                  href={entry.href}
                                >
                                  {entry.name}
                                </Link>
                              </button>
                              <hr className="border-slate-400 mx-auto my-2" />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
