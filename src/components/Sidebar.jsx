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
    <div className="group fixed hidden left-0 top-0 w-20 hover:w-64 hover:items-start h-full min-h-screen bg-white md:flex flex-col p-4 pl-5 pr-2 z-50">
      <img src={LOGO} className="w-8 h-8" />

      <div className="w-full flex flex-col group-hover:items-start items-center pr-4 mt-6 gap-10 overflow-x-hidden overflow-y-scroll custom-scrollbar">
        <div className="flex items-center gap-3">
          <img src={Home} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Home Solana Swap</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={SOLANA} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Create Solana Token</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={CHART} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Tokens Chart</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={DOLLARBAG} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Liquidity Pool</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={SAFELOCK} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Token Locker</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={WALLET} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Wallet Generator</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={PARACHUTE} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Airdrop Generator</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={WALLETSEND} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Multi Wallet Sender</p>
        </div>

        <p className="text-[10px] underline underline-offset-2 font-semibold overflow-visible">EXTRA</p>

        <div className="flex items-center gap-3">
          <img src={SETTINGS} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Settings</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={STAR} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Star</p>
        </div>
        <div className="flex items-center gap-3">
          <img src={GLOBE} className="w-6 h-6" />
          <p className="hidden group-hover:block text-sm font-medium whitespace-nowrap">Globe</p>
        </div>
      </div>
    </div>
  )
}