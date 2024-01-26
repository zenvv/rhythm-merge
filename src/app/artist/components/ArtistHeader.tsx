/* eslint-disable react/no-unescaped-entities */
import hersimg from "@@/assets/hers.jpg";
import Image from "next/image";

interface HeaderProps {
  title: string;
  img?: string;
  type: "Band" | "Arist";
  streams: string;
}

function ArtistHeader({ title, img, type, streams }: HeaderProps) {
  return (
    <div className="mb-8 flex w-full max-w-5xl flex-col items-start justify-start gap-6">
      <Image
        src={hersimg}
        alt="Hers Banner img"
        className="container aspect-auto h-64 w-[64rem] select-none rounded-md rounded-t-none object-cover p-0 max-lg:rounded-none"
      />
      <div className="flex w-full items-end justify-between max-lg:px-4">
        <span className="m-0 flex flex-col gap-2 p-0">
          <h1 className="text-5xl font-bold leading-none text-primary">
            {title}
          </h1>
          <h4 className="text-base font-normal leading-none text-muted-foreground">
            {type} · {streams} monthly listeners
          </h4>
        </span>
      </div>
    </div>
  );
}

export default ArtistHeader;
