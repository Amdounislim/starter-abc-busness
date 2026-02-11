"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modalOpen, setmodalOpen] = useState(false);
  const showModal = () => {
    setmodalOpen(true);
  };
  const hideModal = () => {
    setmodalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ modalOpen, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
  return useContext(ModalContext);
};
