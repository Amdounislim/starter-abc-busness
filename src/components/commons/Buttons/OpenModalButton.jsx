"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { useModalContext } from "@/context/ModalProvider";

const OpenModalButton = ({ text }) => {
  const { showModal } = useModalContext();
  return <CustomButton text={text} callBack={showModal} />;
};

export default OpenModalButton;
