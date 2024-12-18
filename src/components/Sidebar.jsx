import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { FaWallet } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-20 bg-white h-screen rounded-lg flex flex-col items-center gap-2">
      <HiOutlineMenuAlt2
        size={25}
        className="text-gray-600
      "
      />
      <MdDashboard
        size={25}
        className="text-gray-600
      "
      />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
      <MdDashboard size={25} className="text-gray-600" />
      <FaWallet size={25} className="text-gray-600" />
    </div>
  );
};

export default Sidebar;
