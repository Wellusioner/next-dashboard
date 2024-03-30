import React from 'react';
import Image from 'next/image';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdPerson,
  MdLogout,
} from "react-icons/md";
import { auth, signOut } from "app/auth";
import SidebarLink from "./Link";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {


  const { user } = await auth();

  return (
    <div className={"px-6 py-8"}>
      <div className={"flex items-center mb-5"}>
        {
          user?.img
          ? <Image src={user.img} alt={user?.username} className={"w-[40px] h-[40px] rounded-full mr-4 border border-2 border-white"} width={40} height={40} />
          : <span className={"w-[40px] h-[40px] text-primary bg-white rounded-full flex justify-center items-center text-4xl mr-4"}><MdPerson/></span>
        }

        <div>
          <p className={"leading-3"}>{user?.username}</p>
          <span className={"text-light text-sm font-light"}>Administrator</span>
        </div>
      </div>
      <ul>
        {
          menuItems?.map((menu, key) => (
            <li className={"mb-1"} key={key}>
              <span className={"block mb-1 text-light font-medium"}>{menu?.title}</span>
              {
                menu?.list?.map(({title, path, icon}, key) => (
                  <SidebarLink key={key} title={title} icon={icon} path={path} />
                ))
              }
            </li>
          ))
        }

      </ul>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <button className={`w-full flex items-center mb-1 px-3 py-4 rounded-lg hover:bg-gray`}><span className={"mr-2 text-xl"}><MdLogout/></span>Logout</button>
      </form>
    </div>
  );
};

export default Sidebar;