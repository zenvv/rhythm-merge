import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
  return (
    <div className=" group relative w-full">
      <Input
        type="search"
        placeholder="Search..."
        className=" bg-background pl-8 pr-4"
      />
      <LuSearch
        size="16"
        className="absolute left-0 top-0 m-2.5 rounded-sm text-muted-foreground transition-all group-hover:scale-[105%] "
      />
    </div>
  );
}

export default SearchBar;
