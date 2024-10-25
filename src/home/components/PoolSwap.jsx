import { BADGEDOLLARSOLID, BINOCULARS, UNISWAPV2 } from "@/assets";
import { Button } from "@/components/ui/button";
import { MaterialSymbol } from "react-material-symbols";

export default function PoolSwap() {
  return (
    <div className="w-full max-w-md h-min flex flex-col gap-6 rounded-xl bg-white p-3">
      <div className="w-full flex justify-between">
        <div className="flex gap-1 items-center">
          <p className="text-[10px] text-[#232323] font-medium">POOL</p>
          <img src={UNISWAPV2} className="w-3 h-3" />
          <p className="text-[10px] text-[#232323] font-medium">Uniswap V2</p>
        </div>
        <img src={BINOCULARS} className="w-4 h-4" />
      </div>

      <div className="w-full flex items-center">
        <div className="w-full  flex items-center gap-1">
          <p className="text-[10px] font-medium">DEXT: <span className="text-[#6DB9F3]">06TGB5...e85J</span></p>
          <MaterialSymbol icon="content_copy" fill size={12} />
        </div>
        <div className="w-full  flex items-center gap-1">
          <p className="text-[10px] font-medium">DEXT: <span className="text-[#6DB9F3]">06TGB5...e85J</span></p>
          <MaterialSymbol icon="content_copy" fill size={12} />
        </div>
      </div>

      <div className="w-max rounded-full border border-black flex items-center justify-center gap-1 px-3 py-1">
        <img src={BADGEDOLLARSOLID} />
        <p className="text-[10px] text-[#232323] font-medium">DeFi</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-4 gap-4">
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">MARKET CAP</p>
          <p className="text-smf font-semibold text-[#323232]">$48.56M</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">LIQUIDITY</p>
          <p className="text-smf font-semibold text-[#323232]">$826.4K</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">CIRC.SUPPLY</p>
          <p className="text-smf font-semibold text-[#323232]">76.64M</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">HOLDERS</p>
          <p className="text-smf font-semibold text-[#323232]">19.85K</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">TOTAL MKTCAP</p>
          <p className="text-smf font-semibold text-[#323232]">48.56M</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">24H VOLUME</p>
          <p className="text-smf font-semibold text-[#323232]">48.56M</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">TOTAL SUPPLY</p>
          <p className="text-smf font-semibold text-[#323232]">48.56M</p>
        </div>
        <div className="w-full bg-white drop-shadow-2xl flex flex-col items-center gap-1 p-2 rounded-xl">
          <p className="text-[9px] text-[#323232] font-medium uppercase">VOLATILITY</p>
          <p className="text-smf font-semibold text-[#323232]">0.0519</p>
        </div>
      </div>

      <Button className="bg-[#6DB9F3] h-10 w-full flex items-center font-semibold">
        More Info
        <MaterialSymbol icon="keyboard_arrow_down" size={32} />
      </Button>

      <div className="w-full flex gap-1 justify-around">
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#323232] font-medium">5m</p>
          <p className="text-sm text-[#323232] font-medium">-</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#323232] font-medium">1h</p>
          <p className="text-sm text-[#E51A1A] font-medium">-0.28%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#323232] font-medium">6h</p>
          <p className="text-sm text-[#26D926] font-medium">-0.22%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#323232] font-medium">24h</p>
          <p className="text-sm text-[#26D926] font-medium">0.81%</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-[#323232] font-medium">7d</p>
          <p className="text-sm text-[#E51A1A] font-medium">-6.03%</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full flex gap-1 justify-around">
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#323232] font-medium">Txs</p>
            <p className="text-sm text-[#323232] font-semibold">47</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#323232] font-medium">Vol</p>
            <p className="text-sm text-[#323232] font-semibold">$42.69K</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#323232] font-medium">Makers</p>
            <p className="text-sm text-[#323232] font-semibold">39</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#323232] font-medium">Min</p>
            <p className="text-sm text-[#323232] font-semibold">$0.61</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#323232] font-medium">Max</p>
            <p className="text-sm text-[#323232] font-semibold">$0.63</p>
          </div>
        </div>
        <div className="w-full rounded-full h-1 flex items-center overflow-hidden">
          <div className="w-[60%] bg-[#26D926] h-full"></div>
          <div className="w-[40%] bg-[#E51A1A] h-full"></div>
        </div>

        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#323232] font-medium">Buys: 25</p>
            <p className="text-sm text-[#323232] font-medium">$24,355.93</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[#323232] font-medium">Sells: 22</p>
            <p className="text-sm text-[#323232] font-medium">$18,339.56</p>
          </div>
        </div>
      </div>
    </div>
  )
}