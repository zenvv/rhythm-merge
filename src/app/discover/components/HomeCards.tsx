import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HomeCardProps {
  artist: string;
  type: "Band" | "Artist";
  link: string;
  img: string | StaticImport;
}

function HomeCard({ artist, type, link, img }: HomeCardProps) {
  return (
    <Link
      href={`artist/${link}`}
      className="group relative flex h-full w-full items-start justify-start overflow-hidden transition-all"
    >
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-br from-black/50 via-transparent to-transparent p-12">
        <h1 className="text-wrap text-4xl font-bold text-white">{artist}</h1>
        <h4 className="text-lg font-medium text-white/70 ">{type}</h4>
      </div>

      <Image
        src={img}
        alt={`${artist} image`}
        className="h-full w-full scale-105 object-cover object-center transition-all group-hover:scale-110"
      />
    </Link>
  );
}

export default HomeCard;
