/* eslint-disable react/no-unescaped-entities */
import hersimg from "@@/assets/hers.jpg";
import Image from "next/image";

interface HeaderProps {
  title: string;
  img?: string;
  type: "Band" | "Arist";
}

function ArtistHeader({ title, img, type }: HeaderProps) {
  return (
    <div className="mb-6 flex w-full max-w-5xl flex-col items-start justify-start gap-3">
      <Image
        src={hersimg}
        alt="Hers Banner img"
        className="container aspect-auto h-64 w-[64rem] select-none rounded-md rounded-t-none object-cover p-0"
      />
      <div className="flex w-full items-end justify-between">
        <span className="m-0 flex flex-col gap-1 p-0">
          <h1 className="text-5xl font-bold leading-none text-primary">
            {title}
          </h1>
          <h4 className="text-lg font-normal leading-none text-muted-foreground">
            {type}
          </h4>
        </span>
        <span>
          <p className="">4.076.542 monthly listeners</p>
        </span>
      </div>
    </div>
  );
}

export default ArtistHeader;
