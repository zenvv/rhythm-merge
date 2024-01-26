import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArtistHeader from "../components/ArtistHeader";
import ArtistSongs from "../components/ArtistSongs";

/* eslint-disable react/no-unescaped-entities */
function Page() {
  const tabsVal: string[] = [
    "songs",
    "playlists",
    "about",
    "media",
    "merch",
    "stream",
  ];

  return (
    <div className="mb-8 h-full w-full animate-fade-up animate-delay-200 animate-duration-300 animate-once animate-ease-in-out">
      <ArtistHeader title={"Her's"} type={"Band"} streams={"4.076.542"} />
      <Tabs defaultValue="songs" className="w-full max-lg:px-4">
        <TabsList>
          {tabsVal.map((tab) => (
            <TabsTrigger key={tab} value={tab}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value="songs"
          className="w-full animate-fade-left animate-duration-300 animate-once animate-ease-in-out"
        >
          <ArtistSongs artist={"Her's"} />
        </TabsContent>

        {tabsVal.map((tab) => (
          <TabsContent
            key={tab}
            value={tab}
            className="animate-fade-left capitalize animate-duration-300 animate-once animate-ease-in-out"
          >
            {tab}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Page;
