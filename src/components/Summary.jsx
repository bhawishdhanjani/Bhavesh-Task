import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const Summary = () => {
  return (
    <div className="flex h-2/3 w-[50%] bg-white rounded-lg flex-col gap-2">
      <div className="flex flex-row">
        <div className="flex flex-col  gap-2">
          <div className="text-gray ml-2 mt-2">Good Evening!</div>
          <div className="w-14 h-14 ml-2 mt-2  bg-black rounded-full border-4 border-green-500"></div>
        </div>
        <div className="flex flex-row gap-2 mr-40">
          <FaSearch size={20} />
          <IoIosNotifications size={20} />
          <TbWorld size={20} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
