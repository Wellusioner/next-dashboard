import React from 'react';
import Sidebar from "components/dashboard/Sidebar";
import Navbar from "components/dashboard/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className={"flex h-screen"}>
      <div className={"w-[350px] bg-secondary h-full"}>
        <Sidebar />
      </div>
      <div className={"flex flex-col flex-1 p-5"}>
        <Navbar />
        <div className={"flex-1"}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;