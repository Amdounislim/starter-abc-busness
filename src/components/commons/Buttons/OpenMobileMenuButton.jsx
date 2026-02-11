"use client";
import { useMobileMenuContext } from "@/context/MobileMenuProvider";
import Image from "next/image";
import React from "react";

const OpenMobileMenuButton = () => {
  const { showMobileMenu } = useMobileMenuContext();
  return (
    <div onClick={showMobileMenu}>
      <Image
        className="pointer"
        width={40}
        height={40}
        src="./icons/mobileMenu.svg"
        alt="Mobile"
      />
    </div>
  );
};

export default OpenMobileMenuButton;
