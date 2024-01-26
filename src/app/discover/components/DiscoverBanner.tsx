"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import HomeCard from "./HomeCards";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import hersimg from "@@/assets/hers.jpg";
import ternoreiimg from "@@/assets/ternorei.jpg";
import grent from "@@/assets/grentperez.jpg";

function Banner() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );

  return (
    <div className="relative my-10 flex h-max w-full">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        className=" overflow-hidden rounded-xl border"
      >
        <CarouselContent className="h-80">
          <CarouselItem>
            <HomeCard
              artist={"Her's"}
              type={"Band"}
              link={"hers"}
              img={hersimg}
            />
          </CarouselItem>
          <CarouselItem>
            <HomeCard
              artist={"Terno Rei"}
              type={"Band"}
              link={"terno-rei"}
              img={ternoreiimg}
            />
          </CarouselItem>
          <CarouselItem>
            <HomeCard
              artist={"grentperez"}
              type={"Artist"}
              link={"grentperez"}
              img={grent}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Banner;
