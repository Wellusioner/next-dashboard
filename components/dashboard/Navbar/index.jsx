"use client"

import React from 'react';
import {usePathname} from "next/navigation";
import {
  MdMessage,
  MdNotifications,
  MdPublic
} from 'react-icons/md';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={"bg-secondary p-5 flex items-center justify-between mb-5"}>
      <h1 className={"text-2xl"}>{pathname?.split("/")?.pop()?.toUpperCase()}</h1>
      <div className={"flex items-center"}>
        <input className={"bg-gray py-1 px-3 rounded-md"} type="text" placeholder={"Search..."}/>
        <span className={"ms-5 text-lg"}><MdMessage/></span>
        <span className={"ms-5 text-lg"}><MdNotifications/></span>
        <span className={"ms-5 text-lg"}><MdPublic/></span>
      </div>
    </div>
  );
};

export default Navbar;