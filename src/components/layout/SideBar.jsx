"use client";
import { useSideBarContext } from "@/context/SideBarProvider";
import Image from "next/image";
import React from "react";

const SideBar = () => {
  const { sideBar, closeSideBar } = useSideBarContext();
  return (
    <>
      {sideBar && (
        <div
          className="z-index4 sidebarOverlay"
          aria-hidden="true"
          onClick={closeSideBar}
        ></div>
      )}
      <div
        className={`sideBarContainer border p-4 z-index5 ${
          !sideBar && "sideBarHidden"
        } t02`}
      >
        <div className="alignH gap-4">
          <Image
            onClick={closeSideBar}
            className="pointer"
            src="./icons/closeSideBar.svg"
            width={40}
            height={40}
            alt="close"
          />

          <div className="f30 bold">Contact</div>
          <div>{/* IMPORT YOUR SIDE BAR INNER COMPONENT */}</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
