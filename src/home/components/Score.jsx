import { SCORECHART } from "@/assets";
import { Button } from "@/components/ui/button";
import { MaterialSymbol } from "react-material-symbols";

export default function Score() {
  return (
    <div className="w-full bg-white p-4 flex flex-col gap-2 items-center rounded-xl">
      <div className="w-full flex flex-col gap-2 items-center">
        <img src={SCORECHART} className="w-[80%]" />
        <p className="text-2xl font-semibold text-[#232323]">99
          <span className="text-xs text-[#888888] font-semibold">/99</span></p>
        <h3 className="text-[13px] text-black font-semibold">TRADEINGVIEWS Score</h3>
        <h3 className="text-[10px] text-black font-semibold">Project reliability score based on:</h3>
      </div>

      <div className="w-full flex items-center justify-around gap-2">
        <div className="flex items-center gap-1">
          <MaterialSymbol icon="info" color={"#888888"} size={12} />
          <p className="text-[10px] text-black font-semibold">99pt</p>
        </div>
        <div className="flex items-center gap-1">
          <MaterialSymbol icon="sync_alt" color={"#888888"} size={12} />
          <p className="text-[10px] text-black font-semibold">99pt</p>
        </div>
        <div className="flex items-center gap-1">
          <MaterialSymbol icon="group" color={"#888888"} fill size={12} />
          <p className="text-[10px] text-black font-semibold">99pt</p>
        </div>
        <div className="flex items-center gap-1">
          <MaterialSymbol icon="shield" color={"#888888"} fill size={12} />
          <p className="text-[10px] text-black font-semibold">99pt</p>
        </div>
        <div className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 7.2855C10.5 8.2325 9.269 9 7.75 9C6.231 9 5 8.2325 5 7.2855C5 6.3385 6.231 5.5715 7.75 5.5715C9.269 5.5715 10.5 6.339 10.5 7.2855ZM7.75 9.9285C6.231 9.9285 5 9.161 5 8.2145V9.2855C5 10.2325 6.231 11 7.75 11C9.269 11 10.5 10.2325 10.5 9.2855V8.2145C10.5 9.161 9.269 9.9285 7.75 9.9285ZM4.25 4.4285C5.769 4.4285 7 3.661 7 2.7145C7 1.768 5.769 1 4.25 1C2.731 1 1.5 1.7675 1.5 2.7145C1.5 3.6615 2.731 4.4285 4.25 4.4285ZM4.1875 6.4285C4.42508 5.93139 4.80453 5.51576 5.278 5.234C4.94176 5.31771 4.5965 5.3597 4.25 5.359C2.731 5.357 1.5 4.5895 1.5 3.643V4.714C1.5 5.65 2.7 6.4055 4.1875 6.4265V6.4285ZM4.25 11C4.43035 10.9999 4.61052 10.9887 4.7895 10.9665C4.47534 10.6837 4.23941 10.3246 4.1045 9.924C2.6535 9.8765 1.5 9.1305 1.5 8.2145V9.2855C1.5 10.2325 2.731 11 4.25 11ZM4 8.778V7.7C2.6 7.62 1.5 6.8935 1.5 6V7.0715C1.5 7.9655 2.6 8.7 4 8.778Z" fill="#888888" />
          </svg>
          <p className="text-[10px] text-black font-semibold">99pt</p>
        </div>

      </div>


      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1">
            <p className="text-[10px] text-black font-semibold">Audit</p>
            <MaterialSymbol icon="info" color={"#888888"} fill size={16} />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-[10px] text-black font-semibold">Verify external audits</p>
            <MaterialSymbol icon="warning" color={"#888888"} fill size={16} />
          </div>
        </div>
        <div className="w-full flex flex-col">


          <div className="w-full py-2 flex items-center justify-between border-black border-t">
            <div className="flex items-center gap-2">
              <MaterialSymbol icon="info" color={"#888888"} size={16} />
              <p className="text-[10px] text-black font-semibold">Verify external audits</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-black font-semibold">Yes</p>
              <MaterialSymbol icon="check_circle" fill color={"#17C671"} size={16} />
            </div>
          </div>

          <div className="w-full py-2 flex items-center justify-between border-black border-t">
            <div className="flex items-center gap-2">
              <MaterialSymbol icon="info" color={"#888888"} size={16} />
              <p className="text-[10px] text-black font-semibold">Honeypot</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-black font-semibold">No</p>
              <MaterialSymbol icon="cancel" fill color={"#17C671"} size={16} />
            </div>
          </div>

          <div className="w-full py-2 flex items-center justify-between border-black border-t">
            <div className="flex items-center gap-2">
              <MaterialSymbol icon="info" color={"#888888"} size={16} />
              <p className="text-[10px] text-black font-semibold">Buy Tax</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-black font-semibold">0%</p>
              <MaterialSymbol icon="circle" fill color={"#17C671"} size={16} />
            </div>
          </div>

          <div className="w-full py-2 flex items-center justify-between border-black border-t">
            <div className="flex items-center gap-2">
              <MaterialSymbol icon="info" color={"#888888"} size={16} />
              <p className="text-[10px] text-black font-semibold">Sell Tax</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[10px] text-black font-semibold">0%</p>
              <MaterialSymbol icon="circle" fill color={"#17C671"} size={16} />
            </div>
          </div>

        </div>
        <Button className="w-full bg-[#17C671] text-white text-sm font-semibold">
          <MaterialSymbol icon="verified_user" fill color={"#fff"} size={16} />
          Check Audits
        </Button>

      </div>


    </div>
  )
}