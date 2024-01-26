"use client";

import Image from "next/image";
import rmIcon from "@@/rm/rm-icon.png";
import NavButton from "./NavButton";
import {
  RiHome2Line,
  RiShining2Line,
  RiHeartLine,
  RiDiscLine,
  RiDiscFill,
  RiHome2Fill,
  RiHeartFill,
  RiShining2Fill,
} from "react-icons/ri";
import SearchBar from "./Searchbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CgMenuRight } from "react-icons/cg";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed z-10 flex w-full flex-col items-center justify-between border-b bg-background/90 py-4 text-primary backdrop-blur-lg max-lg:h-auto max-lg:justify-center max-lg:p-4">
      <header className="flex w-full max-w-5xl items-center justify-between">
        <div className="flex w-full max-w-5xl  items-center justify-between gap-2">
          <Link
            href="/"
            className="p-1 pr-4 transition-all  hover:cursor-pointer active:scale-95"
          >
            <Image
              src={rmIcon}
              alt="Rhythm Merge Icon"
              height={64}
              width={64}
              className="object-contain opacity-80 brightness-0 transition-all hover:opacity-100 hover:brightness-100"
            />
          </Link>
          {menuOpen && (
            <span className="flex w-max items-center justify-center gap-2  max-lg:flex-col max-lg:items-start">
              <NavButton
                url={"/"}
                text={"Home"}
                Icon={<RiHome2Line />}
                ActiveIcon={<RiHome2Fill />}
              />
              <NavButton
                url={"/discover"}
                text={"Discover"}
                Icon={<RiDiscLine />}
                ActiveIcon={<RiDiscFill />}
              />
              <NavButton
                url={"/trending"}
                text={"Trending"}
                Icon={<RiShining2Line />}
                ActiveIcon={<RiShining2Fill />}
              />
              <NavButton
                url={"/favourites"}
                text={"Favourites"}
                Icon={<RiHeartLine />}
                ActiveIcon={<RiHeartFill />}
              />
            </span>
          )}
          <span className="justify-self-end">
            <span className="max-w-72 max-lg:hidden">
              <SearchBar />
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={showMenu}
              className="dark text-muted-foreground max-lg:flex lg:hidden"
            >
              <CgMenuRight />
            </Button>
          </span>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
