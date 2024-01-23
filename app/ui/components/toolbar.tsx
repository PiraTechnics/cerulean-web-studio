"use client";

import { MobileMenu } from "./mobile-menu";
//import { Toggle } from "./darkmode-toggle";

export const ToolBar = () => {
  return (
    <div className="px-4 flex gap-4">
      <div className="md:hidden pt-1.5">
        <MobileMenu />
      </div>
      {/* <Toggle /> */}
    </div>
  );
};
