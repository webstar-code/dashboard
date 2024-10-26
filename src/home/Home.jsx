import SideBar from "@/components/Sidebar";
import Header from "../components/Header";
import TrendingTokens from "./components/TrendingTokens";
import Ads from "./components/Ads";
import Footer from "@/components/Footer";
import SolonaSwap from "./components/SolonaSwap";
import PoolSwap from "./components/PoolSwap";
import Chart from "./components/Chart";
import TokensTable from "./components/TokensTable";
import News from "./components/News";
import Score from "./components/Score";

export const Home = () => (
  <div className="w-full max-w-[1680px] mx-auto relative h-full min-h-screen flex flex-col items-start">
    <div className="w-full pl-28">
      <Header />
    </div>
    <div className="fixed top-0 h-full md:flex flex-col flex-shrink-0 z-50">
      <SideBar />
    </div>
    <div className="w-full flex flex-col gap-10 bg-[#F7F7F7] p-6 pl-28">
      <Ads />
      <TrendingTokens />
      <div className="w-full flex flex-col-reverse xl:flex-row gap-6">
        <div className="flex flex-col gap-6">
          <div className="w-full bg-white">
            <Chart />
          </div>
          <div className="w-full min-h-[600px]">
            <TokensTable />
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
