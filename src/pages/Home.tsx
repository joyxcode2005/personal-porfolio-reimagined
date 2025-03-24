import Settings from "../components/Settings";
import Topbar from "../components/Topbar";

const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[url('wallpaper.jpg')] bg-cover bg-center">
      <Topbar />
      <div className="absolute top-10 right-2">
        <Settings />
      </div>
    </div>
  );
};

export default Home;
