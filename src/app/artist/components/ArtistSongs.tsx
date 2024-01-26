/* eslint-disable react/no-unescaped-entities */
import SongCard from "./SongCard";
import sohCover from "@@/assets/sohcover.jpeg";
import ithCover from "@@/assets/ithcover.jpg";
import { RiInformationLine } from "react-icons/ri";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SongsProps {
  artist: string;
}

function ArtistSongs({ artist }: SongsProps) {
  return (
    <div className="my-4 flex h-full w-full items-start justify-start gap-4 max-lg:flex-col">
      <div className="flex h-full w-2/3 flex-col items-start justify-start gap-2 max-lg:w-full">
        <SongCard
          artists={"Her's"}
          name={"What Once Was"}
          duration={"4:15"}
          cover={sohCover}
          stream={"242.656.334"}
        />
        <SongCard
          artists={"Her's"}
          name={"Harvey"}
          duration={"3:31"}
          cover={ithCover}
          stream={"74.798.221"}
        />
        <SongCard
          artists={"Her's"}
          name={"Marcel"}
          duration={"3:07"}
          cover={sohCover}
          stream={"78.984.278"}
        />
        <SongCard
          artists={"Her's"}
          name={"She Needs Him"}
          duration={"5:14"}
          cover={ithCover}
          stream={"42.152.542"}
        />
        <SongCard
          artists={"Her's"}
          name={"Cool With You"}
          duration={"6:15"}
          cover={sohCover}
          stream={"80.044.059"}
        />
        <span className="my-4 flex w-full items-center justify-end">
          <Button size="sm" variant="outline">
            See more
          </Button>
        </span>
      </div>
      <div className="h-full w-1/3 max-lg:w-full">
        <Card className="border border-border/50 shadow-none transition-all hover:cursor-pointer hover:bg-primary-foreground/100">
          <CardHeader className="gap-3">
            <CardTitle className="flex items-center gap-2 text-muted-foreground">
              <RiInformationLine />
              About {artist}
            </CardTitle>
            <CardDescription className="text-sm">
              Her's was an indie rock band from Liverpool, England composed of
              English guitarist and singer Stephen Fitzpatrick and Norwegian
              bassist and backing vocalist Audun Laading. They released a
              compilation album, Songs of Her's (2017), followed by a
              full-length studio album, Invitation to Her's (2018).
              <br />
              <br />
              The duo and their tour manager were killed in a road traffic
              collision in Arizona while touring the United States in 2019.
              Heist or Hit Records said of the band's legacy, "their energy,
              vibrancy, and talent came to define our label".
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default ArtistSongs;
