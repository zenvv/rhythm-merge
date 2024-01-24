import Image from "next/image";
import trbanner from "@@/assets/trbanner.png";
import { Button } from "@/components/ui/button";
import { PiMusicNotesFill } from "react-icons/pi";
import {
  SiApplemusic,
  SiDeezer,
  SiSpotify,
  SiYoutubemusic,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex-center h-full w-full flex-col">
      <div className="my-8 grid h-[600px] w-full grid-cols-5 grid-rows-6 gap-3">
        <Card className="group relative col-span-3 row-span-4 h-full w-full overflow-hidden rounded-lg bg-transparent shadow-none">
          <CardHeader className="gap-0 px-8 ">
            <CardDescription className="text-lg font-normal leading-none text-foreground/70">
              featured
            </CardDescription>
            <CardTitle className="text-6xl font-bold leading-none text-foreground">
              Terno Rei
            </CardTitle>
          </CardHeader>
          <CardContent className="flex h-full scale-y-0 items-center justify-between pl-8 pr-12 opacity-0 transition-all group-hover:scale-y-100 group-hover:opacity-100">
            <Button className=" gap-2 rounded-full py-6 text-lg" size="lg">
              <PiMusicNotesFill /> Listen now
            </Button>
            <span className="flex items-center justify-start gap-8 text-foreground/80">
              <SiSpotify size="16" />
              <SiDeezer size="16" />
              <SiApplemusic size="16" />
              <SiYoutubemusic size="16" />
            </span>
          </CardContent>
          <Image
            src={trbanner}
            alt="Banner do Terno Rei"
            className="absolute top-0 -z-10 h-full w-full object-cover opacity-100 transition-all group-hover:scale-125 group-hover:opacity-50"
          />
        </Card>
        <Card className="group relative col-span-2 row-span-6 h-full w-full overflow-hidden rounded-lg bg-transparent shadow-none">
          <CardHeader className="px-8">
            <CardDescription className="text-lg font-normal text-foreground/70">
              featured
            </CardDescription>
            <CardTitle className="text-6xl font-bold text-foreground">
              Terno Rei
            </CardTitle>
          </CardHeader>
          <CardContent className="flex h-full scale-y-0 items-center justify-between pl-8 pr-12 opacity-0 transition-all group-hover:scale-y-100 group-hover:opacity-100">
            <Button className=" gap-2 rounded-full py-6 text-lg" size="lg">
              <PiMusicNotesFill /> Listen now
            </Button>
            <span className="flex items-center justify-start gap-8 text-foreground/80">
              <SiSpotify size="16" />
              <SiDeezer size="16" />
              <SiApplemusic size="16" />
              <SiYoutubemusic size="16" />
            </span>
          </CardContent>
          <Image
            src={trbanner}
            alt="Banner do Terno Rei"
            className="absolute top-0 -z-10 h-full w-full object-cover opacity-100 transition-all group-hover:scale-125 group-hover:opacity-50"
          />
        </Card>
        <Card className="group relative col-span-3 row-span-2 h-full w-full overflow-hidden rounded-lg bg-transparent shadow-none">
          <CardHeader className="px-8">
            <CardDescription className="text-lg font-normal text-foreground/70">
              featured
            </CardDescription>
            <CardTitle className="text-6xl font-bold text-foreground">
              Terno Rei
            </CardTitle>
          </CardHeader>
          <CardContent className="flex h-full scale-y-0 items-center justify-between pl-8 pr-12 opacity-0 transition-all group-hover:scale-y-100 group-hover:opacity-100">
            <Button className=" gap-2 rounded-full py-6 text-lg" size="lg">
              <PiMusicNotesFill /> Listen now
            </Button>
            <span className="flex items-center justify-start gap-8 text-foreground/80">
              <SiSpotify size="16" />
              <SiDeezer size="16" />
              <SiApplemusic size="16" />
              <SiYoutubemusic size="16" />
            </span>
          </CardContent>
          <Image
            src={trbanner}
            alt="Banner do Terno Rei"
            className="absolute top-0 -z-10 h-full w-full object-cover opacity-100 transition-all group-hover:scale-125 group-hover:opacity-50"
          />
        </Card>
      </div>
    </div>
  );
}
