"use client";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [sideBar, setsideBar] = useState(false);
  const openSideBar = () => {
    setsideBar(true);
  };
  const closeSideBar = () => {
    setsideBar(false);
  };

  return (
    <SidebarContext.Provider value={{ sideBar, openSideBar, closeSideBar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSideBarContext = () => {
  return useContext(SidebarContext);
};
