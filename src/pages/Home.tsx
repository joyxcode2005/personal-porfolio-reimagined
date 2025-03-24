import Settings from "../components/Settings";
import Topbar from "../components/Topbar";
import { ToggleProvider } from "../context/ToggleContext";

const Home = () => {
  return (
    <ToggleProvider>
      <div className="w-full h-screen flex justify-center items-center bg-[url('wallpaper.jpg')] bg-cover bg-center">
        <Topbar />
        <div className="absolute top-10 right-2">
          <Settings />
        </div>
      </div>
    </ToggleProvider>
  );
};

export default Home;
