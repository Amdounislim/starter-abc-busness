"use client";
import { useMobileMenuContext } from "@/context/MobileMenuProvider";
import Image from "next/image";
import React from "react";
import headerLinks from "./HeaderLinks";
import Link from "next/link";

const MobileMenu = () => {
  const { mobileMenu, showMobileMenu, hideMobileMenu } = useMobileMenuContext();
  return (
    <div
      className={`mobileMenuContainer z-index5 bg-white t02 p-5 ${
        !mobileMenu && "mobileMenuHidden"
      }`}
    >
      <div className="alignH gap-4">
        <Image
          onClick={hideMobileMenu}
          className="pointer"
          src="./icons/closeSideBar.svg"
          width={40}
          height={40}
          alt="close"
        />
        <div className="bold">Menu Mobile</div>
      </div>
      <div>
        {headerLinks.map((el) => (
          <div key={el.id} onClick={hideMobileMenu}>
            <Link href={el.link}>{el.text}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
