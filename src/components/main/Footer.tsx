import Link from "next/link";
import rmIcon from "@@/rm/rm-black.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" flex h-20 w-full items-center justify-between border-t bg-muted px-20 text-xs text-muted-foreground">
      <span className="flex items-center gap-3">
        <Image
          src={rmIcon}
          width={28}
          alt="Rhythm Merge Icon"
          className="opacity-50 dark:invert"
        />

        <p>Rhythm Merge ©️ all rights reserved · 2024</p>
      </span>
      <span className="flex items-center justify-between gap-1">
        <p>made with ♥ by</p>
        <Link
          className="transition-all hover:font-semibold hover:text-primary hover:underline"
          href="www.github.com/zenvv"
        >
          zenvv
        </Link>
      </span>
    </footer>
  );
}

export default Footer;
