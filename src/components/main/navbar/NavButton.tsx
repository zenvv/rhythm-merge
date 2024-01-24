"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavButtonProps {
  url: string;
  text: string;
  Icon: React.ReactElement;
}

function NavButton({ url, text, Icon }: NavButtonProps) {
  const pathname = usePathname();

  return (
    <>
      <Link href={url}>
        <span
          className={`flex items-center justify-center gap-2 rounded-full p-1 px-3 text-white transition-all hover:bg-white/10 active:scale-95 ${pathname === url ? "bg-white text-zinc-900 hover:bg-white/80" : ""}`}
        >
          <Icon.type {...Icon.props} size={20} />
          <p>{text}</p>
        </span>
      </Link>
    </>
  );
}

export default NavButton;
