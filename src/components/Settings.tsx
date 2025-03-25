import { IoWifi } from "react-icons/io5";
import { useToggle } from "../hooks/useToggle";
import { useState } from "react";
import { Bluetooth, Sun,  Volume2, Play, Maximize2 } from "lucide-react";

const Settings = () => {
  const { isToggled } = useToggle();
  const [isWifiOn, setIsWifiOn] = useState(false); // Matches "Off" in the image
  const [isBluetoothOn, setIsBluetoothOn] = useState(true); // Matches "On" in the image
  const [isAirdropOn, setIsAirdropOn] = useState(false); // Matches "Off" in the image
  const [isLightModeOn, setIsLightModeOn] = useState(true); // Light Mode toggle
  const [displayBrightness, setDisplayBrightness] = useState(50); // Slider for display brightness
  const [soundVolume, setSoundVolume] = useState(50); // Slider for sound volume

  const toggleAirdropOn = () => {
    setIsAirdropOn(!isAirdropOn);
  };

  const toggleWifiOn = () => {
    setIsWifiOn(!isWifiOn);
  };

  const toggleBluetoothOn = () => {
    setIsBluetoothOn(!isBluetoothOn);
  };

  const toggleLightModeOn = () => {
    setIsLightModeOn(!isLightModeOn);
  };

  const handleDisplayBrightnessChange = (e: any) => {
    setDisplayBrightness(e.target.value);
  };

  const handleSoundVolumeChange = (e: any) => {
    setSoundVolume(e.target.value);
  };

  return (
    <div>
      {isToggled && (
        <div
          className="bg-[#f5f5f5] p-4 rounded-2xl shadow-lg w-[21rem] h-auto animate-[fadeIn_0.3s_ease-in-out] transform transition-all"
          style={{
            animation: "slideIn 0.3s ease-in-out",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(245, 245, 245, 0.9)", // Slightly translucent background
          }}
        >
          {/* Connectivity Section */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Wi-Fi */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <button
                onClick={toggleWifiOn}
                className={`p-2 rounded-full ${
                  isWifiOn ? "bg-blue-500" : "bg-gray-300"
                } transition-colors duration-200`}
              >
                <IoWifi
                  className={`text-xl ${
                    isWifiOn ? "text-white" : "text-gray-600"
                  }`}
                />
              </button>
              <div>
                <p className="font-semibold text-sm text-gray-800">Wi-Fi</p>
                <p className="text-xs text-gray-500">{isWifiOn ? "On" : "Off"}</p>
              </div>
            </div>

            {/* Light Mode */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <button
                onClick={toggleLightModeOn}
                className={`p-2 rounded-full ${
                  isLightModeOn ? "bg-blue-500" : "bg-gray-300"
                } transition-colors duration-200`}
              >
                <Sun
                  className={`text-xl ${
                    isLightModeOn ? "text-white" : "text-gray-600"
                  }`}
                />
              </button>
              <p className="font-semibold text-sm text-gray-800">Light Mode</p>
            </div>

            {/* Bluetooth */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <button
                onClick={toggleBluetoothOn}
                className={`p-2 rounded-full ${
                  isBluetoothOn ? "bg-blue-500" : "bg-gray-300"
                } transition-colors duration-200`}
              >
                <Bluetooth
                  className={`text-xl ${
                    isBluetoothOn ? "text-white" : "text-gray-600"
                  }`}
                />
              </button>
              <div>
                <p className="font-semibold text-sm text-gray-800">Bluetooth</p>
                <p className="text-xs text-gray-500">{isBluetoothOn ? "On" : "Off"}</p>
              </div>
            </div>

            {/* Keyboard Brightness */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <button className="p-2 rounded-full bg-gray-300">
                <Sun className="text-xl text-gray-600" />
              </button>
              <p className="font-semibold text-sm text-gray-800">Keyboard Brightness</p>
            </div>

            {/* AirDrop */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <button
                onClick={toggleAirdropOn}
                className={`p-2 rounded-full ${
                  isAirdropOn ? "bg-blue-500" : "bg-gray-300"
                } transition-colors duration-200`}
              >
                <IoWifi
                  className={`text-xl ${
                    isAirdropOn ? "text-white" : "text-gray-600"
                  }`}
                />
              </button>
              <div>
                <p className="font-semibold text-sm text-gray-800">AirDrop</p>
                <p className="text-xs text-gray-500">{isAirdropOn ? "On" : "Off"}</p>
              </div>
            </div>

            {/* Enter Fullscreen */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <button className="p-2 rounded-full bg-gray-300">
                <Maximize2 className="text-xl text-gray-600" />
              </button>
              <p className="font-semibold text-sm text-gray-800">Enter Fullscreen</p>
            </div>
          </div>

          {/* Display Section */}
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-600 mb-1">DISPLAY</p>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <Sun className="text-lg text-gray-600" />
              <input
                type="range"
                min="0"
                max="100"
                value={displayBrightness}
                onChange={handleDisplayBrightnessChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 ${displayBrightness}%, #d1d5db ${displayBrightness}%)`,
                }}
              />
            </div>
          </div>

          {/* Sound Section */}
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-600 mb-1">SOUND</p>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
              <Volume2 className="text-lg text-gray-600" />
              <input
                type="range"
                min="0"
                max="100"
                value={soundVolume}
                onChange={handleSoundVolumeChange}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3b82f6 ${soundVolume}%, #d1d5db ${soundVolume}%)`,
                }}
              />
            </div>
          </div>

          {/* Music Player Section */}
          <div className="flex items-center gap-2 p-2 rounded-xl bg-[#e0e0e5] shadow-sm">
            <img
              src="https://via.placeholder.com/40" // Placeholder for the album art
              alt="Album Art"
              className="w-10 h-10 rounded-lg"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm text-gray-800">Sunflower</p>
              <p className="text-xs text-gray-500">Post Malone / Swae Lee</p>
            </div>
            <button className="p-2">
              <Play className="text-lg text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;