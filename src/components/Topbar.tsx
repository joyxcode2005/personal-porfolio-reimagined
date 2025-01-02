import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBluetoothB } from "react-icons/fa";
import { FaWifi } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import {
  IoBatteryCharging,
  IoOptions,
  IoVolumeHighSharp,
} from "react-icons/io5";

const Topbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f1e5e9c5] h-4 w-full fixed top-0 flex justify-between px-2 py-[15px] ">
      <div className="flex items-center justify-center">
        <img src="apple-logo.png" alt="apple logo" className="w-5" />
        <ul className="flex text-[12px] gap-4 items-center cursor-pointer">
          <li className="font-semibold ml-1 text-xs">Finder</li>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Go</li>
          <li>Window</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="flex items-center gap-1">
        <FaBluetoothB className="h-[14px]" />
        <FaWifi className="h-[14px]" />
        <IoVolumeHighSharp className="h-[14px]" />
        <IoBatteryCharging className="h-[14px]" />
        <p className="text-[12px]">
          {`${currentTime.toLocaleDateString(undefined, {
            weekday: "short",
          })} ${currentTime
            .toLocaleTimeString(undefined, {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .toLowerCase()}`}
        </p>
        <IoIosSearch className="h-[16px]" />
        <img src="siri.png" alt="Siri image" className="h-[16px]" />
        <IoOptions className="h-[16px]" />
      </div>
    </div>
  );
};

export default Topbar;
