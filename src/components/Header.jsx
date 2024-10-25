import { Fuel, Search } from "lucide-react";
import { MaterialSymbol } from 'react-material-symbols';
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { SOLANA } from "@/assets";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between p-4">
      <div className="w-full flex items-center justify-between">
        <div className="w-full max-w-md flex items-center gap-2 px-2 py-1 border border-black rounded-md">
          <Search />
          <Input
            className="border-none shadow-none outline-none"
            placeholder="Search pair by symbol, Name, Contact or Token"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm font-medium">ETH: $2,734.51+3.5% 24h</p>
            </div>
            <div className="flex items-center gap-2">
              <Fuel size={16} />
              <p className="text-sm font-medium">10.07</p>
            </div>
          </div>

          <Select>
            <SelectTrigger className="w-[180px] rounded-full shadow-none border-black">
              <SelectValue defaultValue={"solana"} placeholder="Solana"></SelectValue>
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

          <MaterialSymbol icon="star" fill size={28} />
          <MaterialSymbol icon="settings" fill size={24} />
        </div>

      </div>
    </div>
  )
}