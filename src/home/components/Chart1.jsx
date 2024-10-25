import { REDDIT, SOLANA, TELEGRAM, TWITTER } from "@/assets";
import { MaterialSymbol } from "react-material-symbols";

export default function Chart1() {
  return (
    <div className="w-full bg-white rounded-xl p-4">
      <div className="w-full flex gap-4 items-center justify-around border-b border-black pb-2">

        <div className="flex gap-4 items-center">
          <img src={SOLANA} className="w-8 h-8" />
          <div className="flex flex-col">
            <p className="text-base font-semibold text-[#232323]s">Harrypottero...</p>
            <p className="text-[11px] text-[#818077] font-medium">Solana / WETH</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MaterialSymbol icon="star" size={20} />
          <MaterialSymbol icon="share" size={20} />
        </div>

        <div className="p-2 px-4 border border-black rounded-md">
          <p className="text-lg  text-[#232323] font-bold whitespace-nowrap">$ 0.2671</p>
        </div>

        <div className="rounded-full border flex items-center gap-4 border-black p-0.5 pr-4">
          <div className="w-full rounded-full flex items-center gap-1 bg-[#F6A823] p-2 px-3">
            <MaterialSymbol icon="gpp_maybe" size={20} />
            <p className="text-[11px] font-semibold uppercase">Audit: 3</p>
          </div>
          <img src={REDDIT} className="w-4 h-4" />
          <img src={TELEGRAM} className="w-4 h-4" />
          <img src={TWITTER} className="w-4 h-4" />
          |
          <p className="text-[11px] text-[#232323] font-medium whitespace-nowrap">HOT 7</p>
          <MaterialSymbol icon="bolt" color="#F6A823" fill />
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 justify-end">
            <p className="text-[13px] text-[#C61717] font-medium">-10.99%</p>
            <p className="text-[12px] text-[#232323] font-medium">24h</p>
          </div>
          <p className="text-[12px] text-[#232323] font-medium">0.0001020 SOL</p>


        </div>

      </div>
    </div>
  )
}