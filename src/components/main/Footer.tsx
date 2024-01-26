import Link from "next/link";
import rmIcon from "@@/rm/rm-black.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" flex h-20 w-full items-center justify-center border-t bg-muted text-xs text-muted-foreground">
      <div className="flex w-full max-w-5xl items-center justify-between">
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
            href="https://www.github.com/zenvv/rhythm-merge"
            target="_blank"
          >
            zenvv
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
