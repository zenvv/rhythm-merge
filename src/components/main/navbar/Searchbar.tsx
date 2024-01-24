import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className=" group relative w-full">
      <Input
        type="search"
        placeholder="Search..."
        className="dark  bg-zinc-950 pl-8 pr-4 text-zinc-100 placeholder:text-zinc-700"
      />
      <LuSearch
        size="16"
        className="absolute left-0 top-0 m-2.5 rounded-sm text-zinc-500 transition-all group-hover:scale-[105%] group-hover:text-zinc-100"
      />
    </div>
  );
}

export default SearchBar;
