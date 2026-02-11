"use client";
import { createContext, useContext, useState } from "react";

const MobileMenu = createContext();

export function MobileMenuProvider({ children }) {
  const [mobileMenu, setmobileMenu] = useState(false);
  const showMobileMenu = () => {
    setmobileMenu(true);
  };
  const hideMobileMenu = () => {
    setmobileMenu(false);
  };

  return (
    <MobileMenu.Provider value={{ mobileMenu, showMobileMenu, hideMobileMenu }}>
      {children}
    </MobileMenu.Provider>
  );
}

export const useMobileMenuContext = () => {
  return useContext(MobileMenu);
};
