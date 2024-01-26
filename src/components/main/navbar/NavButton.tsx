"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavButtonProps {
  url: string;
  text: string;
  Icon: React.ReactElement;
  ActiveIcon: React.ReactElement;
}

function NavButton({ url, text, Icon, ActiveIcon }: NavButtonProps) {
  const pathname = usePathname();

  return (
    <>
      <Link href={url}>
        <span
          className={`flex items-center justify-center gap-2 rounded-full p-1 px-3 text-sm transition-all  active:scale-95 ${pathname === url ? "bg-primary text-background hover:bg-primary/80" : "text-primary hover:bg-primary/20 "}`}
        >
          {pathname === url ? (
            <ActiveIcon.type {...ActiveIcon.props} />
          ) : (
            <Icon.type {...Icon.props} />
          )}
          <p>{text}</p>
        </span>
      </Link>
    </>
  );
}

export default NavButton;
