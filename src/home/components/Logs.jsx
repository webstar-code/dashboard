import { MaterialSymbol } from "react-material-symbols";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Button } from "@/components/ui/button";
import { TRAIMP, TRAIMP2 } from "@/assets";

export default function Logs() {
  return (
    <div className="w-full flex flex-col gap-4">

      <div className="w-full flex justify-between gap-6">
        <div className="w-full bg-[#020417] p-2 px-4 flex gap-2 items-center justify-center rounded-lg">
          <p className="text-[12px] font-medium text-white">24H VOLUME:</p>
          <p className="text-sm font-semibold text-white">$5.050B</p>
        </div>
        <div className="w-full bg-[#020417] p-2 px-4 flex gap-2 items-center justify-center rounded-lg">
          <p className="text-[12px] font-medium text-white">24H TXNS:</p>
          <p className="text-sm font-semibold text-white">52,258,349</p>
        </div>
        <div className="w-full bg-[#020417] p-2 px-4 flex gap-2 items-center justify-center rounded-lg">
          <p className="text-[12px] font-medium text-white">LATEST BLOCK</p>
          <p className="text-sm font-semibold text-white">756,258,349</p>
          <p className="text-[12px] font-medium text-white">11s ago</p>
        </div>
      </div>

      <div className="w-full flex gap-6">
        <Select defaultValue="last24">
          <SelectTrigger className="w-min rounded-xl shadow-none border bg-[#000000] text-white text-[10px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last24">
              <div className="flex items-center gap-2">
                <MaterialSymbol icon="schedule" color={"#fff"} />
                <p className="text-sm font-medium">Last 24 hours</p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>

        <div className="w-min rounded-xl shadow-none border bg-[#000000] text-white py-1 p-4 flex items-center gap-2">
          <div className="flex items-center gap-2">
            <MaterialSymbol icon="schedule" size={"#fff"} />
            <p className="text-[10px] font-medium">Trending</p>
            <MaterialSymbol icon="keyboard_arrow_down" size={"#fff"} />
          </div>
          <div className="bg-[#3E3E3E] p-1 rounded-md flex items-center">
            <p className="text-[10px] text-white font-medium  uppercase">5M</p>
          </div>
          <div className="bg-[#3E3E3E] p-1 rounded-md flex items-center">
            <p className="text-[10px] text-white font-medium  uppercase">1h</p>
          </div>
          <div className="bg-white p-1 rounded-md flex items-center">
            <p className="text-[10px] text-black font-semibold  uppercase">6h</p>
          </div>
          <div className="bg-[#3E3E3E] p-1 rounded-md flex items-center">
            <p className="text-[10px] text-white font-medium  uppercase">24h</p>
          </div>

        </div>


        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <MaterialSymbol icon="bar_chart" color={"#232323"} size={16} />
            <p className="text-[10px] text-[#232323] font-semibold">Top</p>
          </div>
          <div className="flex gap-2 items-center">
            <MaterialSymbol icon="arrow_upward_alt" color={"#232323"} size={16} />
            <p className="text-[10px] text-[#232323] font-semibold">Gainer</p>
          </div>
          <div className="flex gap-2 items-center">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3333 0.666504C13.0733 0.666504 13.6666 1.25984 13.6666 1.99984V9.99984C13.6666 10.7398 13.0733 11.3332 12.3333 11.3332H1.66659C0.926585 11.3332 0.333252 10.7398 0.333252 9.99984V1.99984C0.333252 1.25984 0.926585 0.666504 1.66659 0.666504H12.3333ZM4.66658 7.99984V3.99984H3.83325V6.33317L2.16659 3.99984H1.33325V7.99984H2.16659V5.6665L3.86659 7.99984H4.66658ZM7.99992 4.83984V3.99984H5.33325V7.99984H7.99992V7.1665H6.33325V6.4265H7.99992V5.5865H6.33325V4.83984H7.99992ZM12.6666 7.33317V3.99984H11.8333V6.99984H11.0866V4.6665H10.2533V6.99984H9.49992V3.99984H8.66658V7.33317C8.66658 7.50998 8.73682 7.67955 8.86185 7.80457C8.98687 7.9296 9.15644 7.99984 9.33325 7.99984H11.9999C12.1767 7.99984 12.3463 7.9296 12.4713 7.80457C12.5963 7.67955 12.6666 7.50998 12.6666 7.33317Z" fill="#232323" />
            </svg>
            <p className="text-[10px] text-[#232323] font-semibold whitespace-nowrap">New Pair</p>
          </div>
        </div>

        <div className="flex border border-black rounded-xl">
          <div className="flex items-center gap-2 border-r border-black px-4">
            <MaterialSymbol icon="person" fill color={"#3180FF"} />
            <p className="text-[10px] font-semibold text-[#232323]">Profile</p>
          </div>
          <div className="flex items-center gap-2 border-r border-black px-4">
            <MaterialSymbol icon="bolt" fill color={"#F6A823"} />
            <p className="text-[10px] font-semibold text-[#232323]">Booster</p>
          </div>
          <div className="flex items-center gap-2 px-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6666 5.33333V9.33333C13.7999 9.33333 14.6666 8.46667 14.6666 7.33333C14.6666 6.2 13.7999 5.33333 12.6666 5.33333ZM7.33325 4.66667H2.66659C1.93325 4.66667 1.33325 5.26667 1.33325 6V8.66667C1.33325 9.4 1.93325 10 2.66659 10H3.33325V12C3.33325 12.7333 3.93325 13.3333 4.66658 13.3333H5.99992V10H7.33325L9.99992 12.6667H11.3333V2H9.99992L7.33325 4.66667Z" fill="#DF0000" />
            </svg>
            <p className="text-[10px] font-semibold text-[#232323]">Ads</p>
          </div>
        </div>

        <Button className="bg-[#020417]">
          <MaterialSymbol icon="instant_mix" color={"#fff"} size={20} />
          Filters
        </Button>

      </div>

      <table className="w-full rounded-xl">
        <thead className="bg-[#020417] rounded-xl">
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">TOKEN</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">PRICE</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">AGE</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">TXNS</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">VOLUME</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">MAKERS</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">5M</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">1H</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">6H</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">24 H</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">LIQUIDITY</th>
          <th className="text-white text-[8px] font-semibold text-left px-2 py-1">MCAP</th>
        </thead>
        <tbody>
          {[...new Array(40)].map((_, index) => {
            return <TableRow index={index} />

          })}
        </tbody>
      </table>
      <div className="flex items-center gap-6">
        <p className="text-[10px] font-semibold">Showing pairs 1-40 of 36,745</p>
        <div className="flex items-center border border-black p-1 rounded-sm">
          <p className="text-[10px] font-semibold">Pairs 41-80 {`>`}</p>
        </div>
      </div>


    </div >
  )
}

const TableRow = ({ index }) => {
  return (
    <tr className="text-[11px] bg-white border">
      <td className="py-1 px-2 border">
        <div className="flex items-center gap-1 ">
          <p className="text-[7px] text-black font-semibold">#{index + 1}</p>
          <img src={TRAIMP} className="w-4 h-4" />
          <p className="text-[7px] bg-gradient-to-r from-[#0533FF] to-[#D002EB] bg-clip-text text-transparent font-semibold">TRIAMP</p>
          <p className="text-[7px] text-[#888888] font-medium">/SOL</p>
          <img src={TRAIMP2} className="w-4 h-4" />
          <p className="text-[7px] text-black font-semibold">TRUMP AI</p>
          <MaterialSymbol icon="bolt" fill color={"#F6A823"} />
          <p className="text-[7px] text-[#F6A823] font-semibold">2000</p>
        </div>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">$0.0008648</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">15h</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">159,856</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">$5.0M</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">186,998</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-[#C61717] font-semibold">-0.14%</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-[#03DB03] font-semibold">11.86%</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-[#03DB03] font-semibold">20.55%</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-[#03DB03] font-semibold">15,582%</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">$186k</p>
      </td>
      <td className="py-1 px-2 border">
        <p className="text-[7px] text-black font-semibold">$984k</p>
      </td>
    </tr>
  )
}