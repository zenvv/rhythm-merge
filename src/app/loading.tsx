import Image from "next/image";
import rmIcon from "@@/rm/rm-black.png";

function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <span className="flex h-40 w-40 animate-spin items-center justify-center rounded-full border bg-muted p-8 outline outline-offset-4 outline-border/20 animate-normal animate-duration-[2000ms] animate-fill-both animate-infinite animate-ease-linear">
        <Image src={rmIcon} alt="Rhythm Merge Icon" className="opacity-20" />
      </span>
    </div>
  );
}

export default Loading;
