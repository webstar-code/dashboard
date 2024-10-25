import { LOGO, SOLANA } from "@/assets";
import {
  CHART,
  DOLLARBAG,
  GLOBE,
  Home,
  PARACHUTE,
  SAFELOCK,
  SETTINGS,
  STAR,
  WALLET,
  WALLETSEND
} from "@/assets/side-nav-icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Fuel, Search } from "lucide-react";
import { MaterialSymbol } from 'react-material-symbols';
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <div className="w-full flex items-center justify-between">
        <img src={LOGO} className="w-8 h-8 md:hidden" />

        <div className="hidden w-full h-10 max-w-md md:flex items-center gap-2 px-2 py-1 border border-black rounded-xl">
          <Search size={20} />
          <Input
            className="text-xs font-medium border-none shadow-none outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"
            placeholder="Search pair by symbol, Name, Contact or Token"
          />
        </div>

        <div className="w-full flex items-center gap-4 justify-end">
          <div className="hidden md:flex items-center gap-4">
            <div>
              <p className="text-sm font-medium">ETH: $2,734.51+3.5% 24h</p>
            </div>
            <div className="flex items-center gap-2">
              <Fuel size={16} />
              <p className="text-sm font-medium">10.07</p>
            </div>
          </div>

          <Select defaultValue={"solana"}>
            <SelectTrigger className="w-[180px] rounded-full shadow-none border-black">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solana">
                <div className="flex items-center gap-2">
                  <img src={SOLANA} className="w-4 h-4" />
                  <p className="text-sm font-medium">Solana</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-4">
            <MaterialSymbol icon="star" fill size={28} />
            <MaterialSymbol icon="settings" fill size={24} />

            <Sheet>
              <SheetTrigger>
                <MaterialSymbol icon="menu" fill size={24} className="md:hidden" />
              </SheetTrigger>
              <SheetContent className="w-[90%] overflow-y-scroll custom-scrollbar pb-10">
                <div className="w-full h-full min-h-screen bg-white flex flex-col items-start  z-50">
                  <div className="w-full flex items-center  justify-between">
                    {/* <MaterialSymbol icon="close" size={24} /> */}
                    <img src={LOGO} className="w-8 h-8" />
                  </div>

                  <div className="w-full flex flex-col items-start pr-4 mt-6 gap-10">
                    <div className="flex items-center gap-3">
                      <img src={Home} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Home Solana Swap</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={SOLANA} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Create Solana Token</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={CHART} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Tokens Chart</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={DOLLARBAG} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Liquidity Pool</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={SAFELOCK} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Token Locker</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={WALLET} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Wallet Generator</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={PARACHUTE} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Airdrop Generator</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={WALLETSEND} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Multi Wallet Sender</p>
                    </div>

                    <p className="text-[10px] underline underline-offset-2 font-semibold overflow-visible">EXTRA</p>

                    <div className="flex items-center gap-3">
                      <img src={SETTINGS} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Settings</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={STAR} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Star</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src={GLOBE} className="w-6 h-6" />
                      <p className="text-sm font-medium whitespace-nowrap">Globe</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>


          </div>

        </div>

      </div>
    </div>
  )
}