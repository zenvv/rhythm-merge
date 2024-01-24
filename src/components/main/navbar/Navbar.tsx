import Image from "next/image";
import rmIcon from "@@/rm/rm-icon.png";
import NavButton from "./NavButton";
import { DiscIcon, HomeIcon, MixIcon, StarIcon } from "@radix-ui/react-icons";
import SearchBar from "./Searchbar";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed z-10 flex h-32 w-full flex-col items-center justify-between bg-zinc-900 pt-4">
      <span className="flex w-full max-w-5xl items-center justify-start gap-4 text-white transition-all">
        <Link
          href="/"
          className="p-1 transition-all hover:scale-105 hover:cursor-pointer  active:scale-95"
        >
          <Image
            src={rmIcon}
            alt="Rhythm Merge Icon"
            width={64}
            height={64}
            className=" hover:shadow-lg hover:shadow-rm-pink/50"
          />
        </Link>
        <h1 className="text-normal font-bold uppercase leading-none tracking-tight text-rm-pink">
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
      <div className="h-1 w-full justify-self-end bg-gradient-to-r from-rm-yellow via-rm-orange to-rm-pink"></div>
    </div>
  );
}

export default Navbar;
