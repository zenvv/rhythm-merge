"use client";

import { RiDiscLine } from "react-icons/ri";

import React from "react";
import Banner from "./components/DiscoverBanner";

function Page() {
  return (
    <div className="my-8 animate-fade-up animate-delay-200 animate-duration-300 animate-once animate-ease-in-out">
      <header className="flex flex-col items-start gap-1">
        <h1 className="flex items-center gap-2 text-4xl font-bold text-primary">
          <RiDiscLine />
          Discover
        </h1>
        <h4 className="text-lg font-semibold text-muted-foreground">
          Explore different artist and bands of everywhere!
        </h4>
      </header>
      <main className="flex h-full flex-col gap-8">
        <div>
          <Banner />
        </div>
        <section className="space-y-8">
          <h1 className="my-4 border-b text-2xl font-bold text-primary">
            2000s Rock
          </h1>
          <h1 className="my-4 border-b text-2xl font-bold text-primary">
            Nu Metal
          </h1>
          <h1 className="my-4 border-b text-2xl font-bold text-primary">
            Bedroom pop
          </h1>
        </section>
      </main>
    </div>
  );
}

export default Page;
