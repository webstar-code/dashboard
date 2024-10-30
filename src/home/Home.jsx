import Footer from "@/components/Footer";
import SideBar from "@/components/Sidebar";
import Header from "../components/Header";
import News from "./components/News";

export const Home = () => (
  <div className="w-full max-w-[1680px] mx-auto relative h-full min-h-screen flex flex-col items-start">
    <div className="w-full md:pl-28">
      <Header />
    </div>
    <div className="hidden fixed top-0 h-full md:flex flex-col flex-shrink-0 z-50">
      <SideBar />
    </div>
    <div className="w-full flex flex-col gap-10 bg-[#F7F7F7] p-6 md:pl-28">
      <div className="w-full min-h-[500px] bg-white">
      </div>
      <News />
      <Footer />
    </div>
  </div>
);
