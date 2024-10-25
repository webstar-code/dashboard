import { APPLESTORE, GOOGLEPLAYSTORE, INSTAGRAM, TELEGRAM, TWITTER, YOUTUBE } from "@/assets";

export default function Footer() {
  return (
    <div className="w-full flex items-start justify-between py-10 border-t border-black">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-[#020417] font-medium">Follows us on Social Media:</p>
          <div className="flex items-center gap-4">
            <img src={YOUTUBE} />
            <img src={TWITTER} />
            <img src={TELEGRAM} />
            <img src={INSTAGRAM} />
          </div>
        </div>

        <div className="flex gap-4">
          <img src={GOOGLEPLAYSTORE} className="w-24" />
          <img src={APPLESTORE} className="w-24" />
        </div>
      </div>

      <div className="h-full flex flex-col gap-6">
        <div className="flex items-center justify-end gap-4">
          <a href="#" className="text-xs text-[#232323] font-medium">General Statement</a>
          <a href="#" className="text-xs text-[#232323] font-medium">Legal Advice</a>
          <a href="#" className="text-xs text-[#232323] font-medium">About us</a>
          <a href="#" className="text-xs text-[#232323] font-medium">Solana Token</a>
          <a href="#" className="text-xs text-[#232323] font-medium">Team</a>
          <a href="#" className="text-xs text-[#232323] font-medium">Contact</a>
        </div>
        <p className="text-xs text-[#232323] font-medium ml-auto mt-auto">Copyright © 2024 TradingViews. All rights reserved.</p>
      </div>

    </div>
  )
}