import { useEffect, useState } from "react";
import { BiSolidToggleRight, BiToggleLeft } from "react-icons/bi";

import { FaWifi } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoBatteryCharging } from "react-icons/io5";
import { useToggle } from "../hooks/useToggle";

const Topbar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { toggle } = useToggle();

  console.log("This is the toogle , getting form useToggle hook: ", toggle);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f1e5e99c] h-4 w-full fixed top-0 flex justify-between px-2 py-[20px] ">
      <div className="flex items-center justify-center">
        <img src="apple-logo.png" alt="apple logo" className="w-8" />
        <ul className="flex text-[12px] gap-4 items-center cursor-pointer text-sm">
          <li className="font-semibold ml-1 text-lg">Finder</li>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Go</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex gap-2 items-center cursor-pointer hover:bg-white hover:bg-opacity-50 px-2 rounded-lg">
          <span className="text-sm text-white font-bold">100%</span>
          <IoBatteryCharging
            className="text-2xl outline-white"
            style={{ fill: "green", stroke: "white", strokeWidth: 10 }}
          />
        </div>
        <FaWifi className="text-white font-bold cursor-pointer" />
        <IoIosSearch className="text-white font-bold cursor-pointer " />
        <button
          onClick={toggle}
          className="flex flex-col cursor-pointer hover:bg-white hover:bg-opacity-50 px-2 rounded-lg"
        >
          <BiToggleLeft className="text-white font-bold text-sm" />
          <BiSolidToggleRight className="text-white font-bold text-sm -mt-1" />
        </button>
        <p className="font-bold text-white">
          {`${currentTime.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })} ${currentTime
            .toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .toLowerCase()}`}
        </p>
      </div>
    </div>
  );
};

export default Topbar;
