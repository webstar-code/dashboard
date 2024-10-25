import SideBar from "@/components/Sidebar";
import Header from "../components/Header";
import Section2 from "./components/Section2";
import Slider from "./components/Slider";

export const Home = () => (
  <div className="w-full pl-20">
    <Header />
    <SideBar />
    <div className="w-full h-full flex flex-col gap-10 min-h-screen bg-[#F7F7F7] p-10">
      <Slider />
      <Section2 />
    </div>


  </div>
);
