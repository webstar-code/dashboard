import { LOGO } from "@/assets";
import {
  Home,
  SOLANA,
  CHART,
  DOLLARBAG,
  GLOBE,
  PARACHUTE,
  SAFELOCK,
  SETTINGS,
  STAR,
  WALLET,
  WALLETSEND
} from "@/assets/side-nav-icons";

export default function SideBar() {
  return (
    <div className="fixed left-0 top-0 w-20 h-full min-h-screen bg-white flex flex-col items-center p-4 z-50">
      <img src={LOGO} className="w-8 h-8" />

      <div className="flex flex-col items-center mt-6 gap-10 overflow-y-scroll custom-scrollbar">
        <img src={Home} className="w-6 h-6" />
        <img src={SOLANA} className="w-6 h-6" />
        <img src={CHART} className="w-6 h-6" />
        <img src={DOLLARBAG} className="w-6 h-6" />
        <img src={SAFELOCK} className="w-6 h-6" />
        <img src={WALLET} className="w-6 h-6" />
        <img src={PARACHUTE} className="w-6 h-6" />
        <img src={WALLETSEND} className="w-6 h-6" />
        <p className="text-xs underline underline-offset-2 font-semibold">EXTRA</p>

        <img src={SETTINGS} className="w-6 h-6" />
        <img src={STAR} className="w-6 h-6" />
        <img src={GLOBE} className="w-6 h-6" />
      </div>
    </div>
  )
}