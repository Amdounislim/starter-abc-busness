"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { useSideBarContext } from "@/context/SideBarProvider";

const OpenSideBarButton = ({ text }) => {
  const { openSideBar } = useSideBarContext();
  return <CustomButton text={text} callBack={openSideBar} />;
};

export default OpenSideBarButton;
