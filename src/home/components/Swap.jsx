import { LOGO, SOLANA, UNISWAPV2, WALLETWHITE } from "@/assets";
import { MaterialSymbol } from "react-material-symbols";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Button } from "@/components/ui/button";

export default function SolonaSwap() {
  return (
    <div className="w-full max-w-md h-min flex flex-col gap-4 rounded-xl bg-white">
      <div className="w-full bg-[#232323] flex items-center gap-2 p-2 rounded-xl">
        <MaterialSymbol icon="swap_horiz" color={"#fff"} />
        <p className="text-white text-sm">Solana Swap</p>
      </div>
      <div className="flex flex-col gap-4 p-3">

        <div className="w-full flex flex-col items-center gap-4">
          <Select defaultValue={"trading"}>
            <SelectTrigger className="w-full rounded-xl shadow-none border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="trading">
                <div className="flex items-center gap-2">
                  <img src={LOGO} className="w-4 h-4" />
                  <p className="text-sm font-medium">Trading Views</p>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <Input
            className="text-base text-center font-medium border rounded-xl shadow-none outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"
            placeholder=""
            value={10}
          />
          <MaterialSymbol icon="autorenew" size={24} />
          <Select defaultValue={"solana"}>
            <SelectTrigger className="w-full rounded-xl shadow-none border">
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
          <Input
            className="text-base text-center font-medium border rounded-xl shadow-none outline-none focus:outline-none focus:ring-0 focus-visible:ring-0"
            placeholder=""
            value={0.002377}
          />

          <Button className="bg-[#6DB9F3] h-10 w-full font-semibold">
            <img src={WALLETWHITE} />
            Connect wallet
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-[10px] text-[#232323] font-medium">Price per Tradeview</p>
            <p className="text-[10px] text-[#232323] font-medium">0.02377 SOL</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[10px] text-[#232323] font-medium">Slippage</p>
            <div className="flex gap-1">
              <p className="text-[10px] text-[#232323] font-medium">Auto</p>
              <MaterialSymbol icon="settings" fill />
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-[10px] text-[#232323] font-medium">Provider</p>
            <Select>
              <SelectTrigger className="w-[180px] h-6 rounded-md shadow-none border">
                <SelectValue placeholder="trading"></SelectValue>
              </SelectTrigger>
              <SelectContent>

              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between">
            <p className="text-[10px] text-[#232323] font-medium">By <span className="text-[#64B2FF]">OKX</span></p>
            <div className="flex gap-1 items-center">
              <p className="text-[10px] text-[#232323] font-medium">Or try</p>
              <img src={UNISWAPV2} className="w-3 h-3" />
              <p className="text-[10px] text-[#232323] font-medium">Uniswap V2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}