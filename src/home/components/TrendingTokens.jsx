import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { MaterialSymbol } from "react-material-symbols";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AVATAR1, LOGO, SOLANA, TELEGRAM, TWITTER } from "@/assets";

export default function TrendingTokens() {
  const [trendingState, setTrendingState] = useState(true);

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-[#00135D] text-xs font-medium">Network: <span className="text-[#006699]">525</span></p>
          <p className="text-[#00135D] text-xs font-medium">Solana: <span className="text-[#006699]">818</span></p>
          <p className="text-[#00135D] text-xs font-medium">Pools: <span className="text-[#006699]">427,377</span></p>
          <p className="text-[#00135D] text-xs font-medium">Tokens: <span className="text-[#006699]">397,784</span></p>
          <p className="text-[#00135D] text-xs font-medium">Network: <span className="text-[#006699]">525</span></p>
          <p className="text-[#00135D] text-xs font-medium whitespace-nowrap">Next token burn:
            <span className="bg-[#262C43] px-2 py-1 ml-2 text-xs text-white rounded-full">
              1,515,150 Solana
              <MaterialSymbol icon="bolt" color="#F6A823" fill />
            </span>
          </p>
        </div>

        <div className="flex flex-row items-center gap-2">
          <p className="text-xs text-[#818EA3]">Today’s trending tokens</p>
          <Switch
            className="bg-[#8F8F8F]"
            checked={trendingState}
            onCheckedChange={setTrendingState}
          />
        </div>
      </div>
      {trendingState &&
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-6">
              <CarouselItem className="pl-6 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                <div className="relative w-full h-full bg-white rounded-xl p-6 flex flex-col gap-6">
                  <div className="flex items-center">
                    <Tabs defaultValue="gainers" className="w-full">
                      <TabsList className="bg-whtie">
                        <TabsTrigger className="text-[11px] text-[#232323] data-[state=active]:bg-[#232323] data-[state=active]:text-white data-[state=active]:font-semibold" value="gainers">Daily Gainers</TabsTrigger>
                        <TabsTrigger className="ml-6 text-[11px] text-[#232323] data-[state=active]:bg-[#232323] data-[state=active]:text-white data-[state=active]:font-semibold" value="losers">Daily Losers</TabsTrigger>
                      </TabsList>
                      <TabsContent value="gainers">
                        <table className="w-full">
                          <thead>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </thead>
                          <tbody>
                            {[...new Array(5)].map((_, index) => {
                              return <TableRow index={index} />
                            })}
                          </tbody>
                        </table>
                      </TabsContent>
                      <TabsContent value="losers">
                        <table className="w-full">
                          <thead>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                          </thead>
                          <tbody>
                            {[...new Array(2)].map((_, index) => {
                              return <TableRow index={index} />
                            })}
                          </tbody>
                        </table>
                      </TabsContent>
                    </Tabs>
                    <p className="absolute right-6 top-8 text-[11px] font-semibold text-[#232323] flex items-center">More
                      <MaterialSymbol icon="keyboard_arrow_right" />
                    </p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-6 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                <div className="relative w-full h-full bg-white rounded-xl p-6 flex flex-col gap-2">
                  <p className="absolute right-6 top-8 text-[11px] font-semibold text-[#232323] flex items-center">More
                    <MaterialSymbol icon="keyboard_arrow_right" />
                  </p>
                  <div className="w-full flex items-center gap-2">
                    <img src={LOGO} className="w-9 h-9" />
                    <div className="flex flex-col">
                      <h3 className="text-[#232323] text-[15px] font-bold">Token Creator <span className="text-[#909090] font-medium">by TradingViews</span></h3>
                      <p className="text-[10px] text-[#232323]"><strong>Security</strong> for traders. <strong>Exposure</strong> for your projects.</p>
                    </div>
                  </div>

                  <table className="w-full table-auto">
                    <thead>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </thead>
                    <tbody>
                      <Table2Row />
                      <Table2Row />
                      <Table2Row />
                      <Table2Row />
                      <Table2Row />
                    </tbody>
                  </table>
                </div>
              </CarouselItem>

              <CarouselItem className="pl-6 sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
                <div className="relative w-full h-full bg-white rounded-xl p-6 flex flex-col gap-6">
                  <p className="absolute right-6 top-8 text-[11px] font-semibold text-[#232323] flex items-center">More
                    <MaterialSymbol icon="keyboard_arrow_right" />
                  </p>
                  <div className="flex items-center gap-2">
                    <MaterialSymbol icon="rotate_right" weight={700} size={24} />
                    <p className="text-[15px] text-[#232323] font-semibold">Recently updated socials</p>
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                          <img src={AVATAR1} className="w-full h-full" />
                        </div>
                        <p className="text-[11px] font-medium text-[#232323]">OIIA</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-medium text-[#232323]">1 hour ago,</p>
                        <MaterialSymbol icon="mail" size={16} />
                        <img src={TELEGRAM} className="w-3 h-3" />
                        <img src={TWITTER} className="w-3 h-3" />
                        <MaterialSymbol icon="monitoring" size={16} />
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                          <img src={AVATAR1} className="w-full h-full" />
                        </div>
                        <p className="text-[11px] font-medium text-[#232323]">OIIA</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-medium text-[#232323]">1 hour ago,</p>
                        <MaterialSymbol icon="mail" size={16} />
                        <MaterialSymbol icon="jamboard_kiosk" size={16} />
                        <img src={TELEGRAM} className="w-3 h-3" />
                        <MaterialSymbol icon="monitoring" size={16} />
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                          <img src={AVATAR1} className="w-full h-full" />
                        </div>
                        <p className="text-[11px] font-medium text-[#232323]">OIIA</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-medium text-[#232323]">4 hour ago,</p>
                        <MaterialSymbol icon="mail" size={16} />
                        <img src={TELEGRAM} className="w-3 h-3" />
                        <img src={TWITTER} className="w-3 h-3" />
                        <MaterialSymbol icon="monitoring" size={16} />
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                          <img src={AVATAR1} className="w-full h-full" />
                        </div>
                        <p className="text-[11px] font-medium text-[#232323]">OIIA</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-medium text-[#232323]">3 hour ago,</p>
                        <MaterialSymbol icon="mail" size={16} />
                        <MaterialSymbol icon="jamboard_kiosk" size={16} />
                        <img src={TELEGRAM} className="w-3 h-3" />
                        <MaterialSymbol icon="monitoring" size={16} />
                      </div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="flex gap-2 items-center">
                        <div className="w-5 h-5 rounded-full overflow-hidden">
                          <img src={AVATAR1} className="w-full h-full" />
                        </div>
                        <p className="text-[11px] font-medium text-[#232323]">OIIA</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[11px] font-medium text-[#232323]">4 hour ago,</p>
                        <MaterialSymbol icon="mail" size={16} />
                        <img src={TELEGRAM} className="w-3 h-3" />
                        <img src={TWITTER} className="w-3 h-3" />
                        <MaterialSymbol icon="monitoring" size={16} />
                      </div>
                    </div>

                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      }
    </div >
  )
}

const TableRow = ({ index }) => {
  return (
    <tr className="text-[11px]">
      <td className="p-1 ">#{index + 1}</td>
      <td className="p-1 flex items-center gap-1">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="12" height="12" rx="6" fill="url(#pattern0_39_2370)" />
          <defs>
            <pattern id="pattern0_39_2370" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlinkHref="#image0_39_2370" transform="scale(0.00444444)" />
            </pattern>
            <image id="image0_39_2370" width="225" height="225" xlinkHref="data:image/png;base64,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" />
          </defs>
        </svg>
        <p className="text-[11px] font-semibold text-[#232323]">Blockai <span className="text-[#B3B3B3]">/ WETH</span></p>
      </td>
      <td className="p-1 "><p className="text-[11px] font-semibold text-[#03DB03]">$0.00509</p></td>
      <td className="p-1 flex items-center gap-1">
        <p className="text-[11px] font-semibold text-[#03DB03] flex items-center gap-1">
          <svg width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.35 2.62036L1 4.00003L0.528667 3.5287L1.879 2.14902L0.229004 0.499023H4V4.27036L2.35 2.62036Z" fill="#03DB03" />
          </svg>
          $87,654.89%</p></td>
    </tr>
  )
}

const Table2Row = () => {
  return (
    <tr className="text-[11px]">
      <td className="p-1 ">#1</td>
      <td className="p-1 w-full flex items-center gap-1">
        <img src={AVATAR1} className="w-5 h-5"/>
        <p className="text-[11px] font-semibold text-[#232323]">DUCK DUCK</p>
      </td>
      <td className="p-1 "><p className="text-[11px] text-[#232323] justify-self-end">1 day ago,</p></td>
      <td className="p-1 flex items-center gap-1 justify-self-end">
        <img src={SOLANA} className="w-4 h-4" />
        <p className="text-[11px] text-[#232323] font-semibold">ETH</p>
      </td>
    </tr>

  )
}