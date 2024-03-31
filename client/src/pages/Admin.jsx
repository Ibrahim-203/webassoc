import { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import {
  AiOutlineTeam,
  AiOutlineDribbble,
  AiOutlineNotification,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaUserLock } from "react-icons/fa6";

const admin = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Tableau de bord", icon: <RiDashboardFill /> },
    { title: "Membre", icon: <AiOutlineTeam/>, spacing: true },
    { title: "Activités", icon: <AiOutlineDribbble/> },
    { title: "Evènement", icon: <AiOutlineNotification/> },
    { title: "Utilisateur", icon: <AiOutlineUser/> },
    { title: "Se deconnecter", icon: <AiOutlineLogout/>,spacing: true }
  ];

  return (
    <div className="flex text-white font-secondaryFont">
      <div
        className={`bg-primary h-screen pt-8 p-5 ${
          open ? "w-72" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white rounded-full text-primary absolute text-2xl -right-3 top-9 border border-primary cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        {/* Logo admin */}
        <div className="inline-flex">
          <FaUserLock
            className={`text-4xl bg-gray-400 rounded-md p-1 duration-500 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`font-bold ml-2 text-3xl ${
              !open && "scale-0"
            } duration-300`}
          >
            AESA
          </h1>
        </div>
        {/* Search */}
        <div className="flex items-center bg-white px-2 py-1 rounded-md mt-2">
          <BsSearch className={`text-black ${open && "mr-2"} `} />
          <input
            type={"search"}
            placeholder="Chercher"
            className={`focus:outline-none text-black text-base bg-transparent w-full ${
              !open && "hidden"
            }`}
          />
        </div>
        {/* links */}
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 ${
                  menu.spacing ? "mt-6" : "mt-2"
                } hover:bg-gray-500 rounded-md`}
              >
                <span className="text-2xl block float-left"> {menu.icon?menu.icon:<RiDashboardFill />}</span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-3xl font-semibold text-black"> Home Page </h1>
      </div>
    </div>
  );
};

export default admin;
