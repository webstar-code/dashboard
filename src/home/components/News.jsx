import { SOLANA } from "@/assets";

export default function News() {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-base font-semibold text-[#020417]">Get news about Solana every day!</h3>
      <p className="text-[10px] text-[#232323] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>

      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <div className="w-full rounded-xl bg-white p-6 flex gap-2 items-start">
          <img src={SOLANA} className="w-6 h-6" />
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-semibold text-[#020417]">Sample text</p>
            <p className="text-[12px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et laborum.</p>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white p-6 flex gap-2 items-start">
          <img src={SOLANA} className="w-6 h-6" />
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-semibold text-[#020417]">Sample text</p>
            <p className="text-[12px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et laborum.</p>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white p-6 flex gap-2 items-start">
          <img src={SOLANA} className="w-6 h-6" />
          <div className="flex flex-col gap-2">
            <p className="text-[13px] font-semibold text-[#020417]">Sample text</p>
            <p className="text-[12px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et laborum.</p>
          </div>
        </div>
      </div>

      <p className="text-[9px] texxt-[232323] font-medium text-center leading-loose">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  )
}