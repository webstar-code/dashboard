import {
  Card,
  CardContent
} from "@/components/ui/card"
import { MaterialSymbol } from "react-material-symbols"


import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"


export default function Ads() {
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
          <CarouselItem className="pl-4 sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SliderCard /></CarouselItem>
        </CarouselContent>
      </Carousel>

    </div>
  )
}

function SliderCard() {
  return (
    <div className="w-full md:w-min flex flex-col gap-1">
      <Card>
        <CardContent className="w-full md:w-[301px] min-h-[120px] flex items-center justify-center p-0">
          <MaterialSymbol icon="broken_image" size={24} />
        </CardContent>
      </Card>
      <p className="text-[10px] text-[#006699]">Lorem ipsum Lorem</p>
      <p className="text-[10px] text-black">Lorem ipsum Lorem ipsum Lorem ipsum</p>
    </div>
  )
}