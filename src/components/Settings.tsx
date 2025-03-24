import { useToggle } from "../hooks/useToggle";

const Settings = () => {
  const { isToggled } = useToggle();
  console.log("This is the isToggled thing: ", isToggled);

  return (
    <div>
      {isToggled && (
        <div
          className="bg-white p-5 rounded-lg border border-gray-200 shadow w-80 h-96 animate-[fadeIn_0.3s_ease-in-out] transform transition-all hover:scale-105 hover:shadow-xl"
          style={{
            animation: "slideIn 0.3s ease-in-out",
          }}
        >
          hello world
        </div>
      )}
    </div>
  );
};

export default Settings;
