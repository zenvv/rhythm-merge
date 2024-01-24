import Image from "next/image";
import rmIcon from "@@/rm/rm-icon.png";
import NavButton from "./NavButton";
import { DiscIcon, HomeIcon, MixIcon, StarIcon } from "@radix-ui/react-icons";
import SearchBar from "./Searchbar";

function Navbar() {
  return (
    <div className="fixed z-10 flex h-32 w-full flex-col items-center justify-between bg-zinc-900 pt-4">
      <span className="flex w-full max-w-5xl items-center justify-start gap-4 text-white transition-all">
        <span className="p-1">
          <Image
            src={rmIcon}
            alt="Rhythm Merge Icon"
            width={64}
            height={64}
            className="hover:shadow-rm-pink/50  transition-all hover:scale-105 hover:shadow-lg"
          />
        </span>
        <h1 className="text-normal text-rm-pink font-bold uppercase leading-none tracking-tight">
          Rhythm <br />
          Merge
        </h1>
      </span>

      <header className="flex w-full max-w-5xl items-center justify-between">
        <div className="flex w-full max-w-5xl items-center justify-start gap-2">
          <NavButton url={"/"} text={"Home"} Icon={<HomeIcon />} />
          <NavButton url={"/trending"} text={"Trending"} Icon={<DiscIcon />} />
          <NavButton
            url={"/favourites"}
            text={"Favourites"}
            Icon={<StarIcon />}
          />
          <NavButton url={"/discover"} text={"Discover"} Icon={<MixIcon />} />
        </div>
        <span className="max-w-72">
          <SearchBar />
        </span>
      </header>
      <div className="from-rm-yellow via-rm-orange to-rm-pink h-1 w-full justify-self-end bg-gradient-to-r"></div>
    </div>
  );
}

export default Navbar;
