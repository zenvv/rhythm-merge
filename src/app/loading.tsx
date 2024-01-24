import Image from "next/image";
import rmIcon from "@@/rm/rm-black.png";

function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Image src={rmIcon} width={128} alt="Rhythm Merge Icon" />
    </div>
  );
}

export default Loading;
