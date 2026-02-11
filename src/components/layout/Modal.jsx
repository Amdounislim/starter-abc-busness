"use client";

import { useModalContext } from "@/context/ModalProvider";
import Image from "next/image";
import React from "react";

const Modal = () => {
  const { modalOpen, hideModal } = useModalContext();

  return (
    <>
      {modalOpen && (
        <div
          className="z-index4 modalOverlay"
          aria-hidden="true"
          onClick={hideModal}
        ></div>
      )}
      <div
        className={`modalContainer border p-4 z-index5 bg-gold ${
          !modalOpen && "modalHidden"
        } t02`}
      >
        <div className="alignH gap-4">
          <Image
            onClick={hideModal}
            className="pointer"
            src="./icons/closeSideBar.svg"
            width={40}
            height={40}
            alt="close"
          />

          <div className="f30 bold">Contact modal</div>
          <div>{/* IMPORT YOUR MODAL INNER COMPONENT */}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
