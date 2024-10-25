import SideBar from "@/components/Sidebar";
import Header from "../components/Header";
import Section2 from "./components/Section2";
import Slider from "./components/Slider";
import Footer from "@/components/Footer";
import SolonaSwap from "./components/Swap";
import PoolSwap from "./components/PoolSwap";
import Chart1 from "./components/Chart1";
import Logs from "./components/Logs";
import News from "./components/News";
import Score from "./components/Score";

export const Home = () => (
  <div className="relative w-full md:pl-20 mx-auto">
    <Header />
    <SideBar />
    <div className="w-full h-full flex flex-col gap-10 min-h-screen bg-[#F7F7F7] p-6">
      <Slider />
      <Section2 />
      <div className="w-full flex flex-col-reverse xl:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div className="w-full bg-white">
            <Chart1 />
          </div>
          <div className="w-full min-h-[600px]">
            <Logs />
          </div>
        </div>
        <div className="min-w-[300px] flex flex-wrap xl:flex-col gap-6 grow shrink-0">
          <SolonaSwap />
          <PoolSwap />
          <Score />
        </div>
      </div>
      <News />
      <Footer />
    </div>


  </div>
);
