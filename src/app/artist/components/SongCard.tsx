import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PiWaveformBold, PiClockBold, PiPlayFill } from "react-icons/pi";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

interface SongCardProps {
  artists: string;
  name: string;
  duration: string;
  cover: any | null;
  stream: string;
}

function SongCard({ artists, name, duration, cover, stream }: SongCardProps) {
  return (
    <div className="group flex w-full items-center justify-start rounded-lg border border-border/50 bg-muted/50 p-2 transition-all hover:border-border/100 hover:bg-muted/100">
      <Image
        src={cover}
        alt={`${name}'s cover`}
        width={64}
        height={64}
        className="rounded-md border"
      />

      <div className="flex w-full items-center justify-between">
        <span className="flex w-full flex-col items-start justify-start gap-1 justify-self-start px-4">
          <h1 className=" text-sm font-semibold leading-none text-primary">
            {name}
          </h1>
          <h4 className="text-xs font-medium leading-none text-primary/80">
            {artists}
          </h4>
        </span>

        <span className="flex w-full items-center justify-between gap-4 px-4">
          <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <PiClockBold />
            {duration}
          </p>
          <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <PiWaveformBold />
            {stream}
          </p>
        </span>
      </div>
    </div>
  );
}

export default SongCard;
