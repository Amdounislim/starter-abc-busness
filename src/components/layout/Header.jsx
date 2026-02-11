"use client";
import React from "react";
import OpenMobileMenuButton from "../commons/Buttons/OpenMobileMenuButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import HeaderLinks from "./HeaderLinks";
import Image from "next/image";
import CustomButton from "../commons/Buttons/CustomButton";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <header className="headerContainer alignH z-index3 gnPadding">
      <div className="d-flex hideMobile gap-3 alignC">
        {HeaderLinks.slice(0, 4).map((el) => (
          <div key={el.id}>
            <Link 
              href={el.link} 
              className="headerLink"
              style={{ opacity: pathname === el.link ? 1 : 0.4 }}
            >
              {el.text}
            </Link>
          </div>
        ))}
      </div>
      <div className="headerLogoCenter">
        <Link href={"/"}>
          <Image width={84.45} height={55.44} alt="logo" src={"/logo.svg"} />
        </Link>
      </div>
      <div className="alignC">
        <CustomButton text="Contact" callBack={handleContactClick} />
      </div>
      {/* <div className="onlyMobile">
        <OpenMobileMenuButton />
      </div> */}
    </header>
  );
};

export default Header;
