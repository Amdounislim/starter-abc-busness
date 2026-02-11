import React from "react";
import { SidebarProvider } from "./SideBarProvider";
import { ModalProvider } from "./ModalProvider";
import { MobileMenuProvider } from "./MobileMenuProvider";

const TotalContext = ({ children }) => {
  return (
    <SidebarProvider>
      <MobileMenuProvider>
        <ModalProvider>{children}</ModalProvider>
      </MobileMenuProvider>
    </SidebarProvider>
  );
};

export default TotalContext;
