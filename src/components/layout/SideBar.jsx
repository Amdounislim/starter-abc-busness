"use client";
import { useSideBarContext } from "@/context/SideBarProvider";
import Image from "next/image";
import React from "react";

const SideBar = () => {
  const { sideBar, closeSideBar } = useSideBarContext();
  return (
    <>
      {/* {sideBar && (
        <div
          className="z-index4 sidebarOverlay"
          aria-hidden="true"
          onClick={closeSideBar}
        ></div>
      )} */}
      <div
        className={`sideBarContainer border py-4 px-5 z-index5 ${
          !sideBar && "sideBarHidden"
        } t02`}
      >
        <div
          className="alignH gap-2"
          onClick={closeSideBar}
          style={{ cursor: "pointer" }}
        >
          <Image
            className="pointer"
            src="./Vector_close.svg"
            width={10}
            height={10}
            alt="close"
          />

          <div className="f12 medium font-montserrat text-orange opacity-50">
            Fermer
          </div>
          <div>{/* IMPORT YOUR SIDE BAR INNER COMPONENT */}</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
