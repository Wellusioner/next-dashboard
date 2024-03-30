"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const SidebarLink = ({title, path, icon}) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return <Link className={`flex items-center mb-1 px-3 py-4 rounded-lg hover:bg-gray ${isActive ? 'bg-gray' : ''}`} href={path}><span className={"mr-2 text-xl"}>{icon}</span> {title}</Link>
};

export default SidebarLink;