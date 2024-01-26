import * as React from "react";
import { Check, ChevronsUpDown, SearchIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { recipes } from "~/recipes";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/router";

export function Search() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? recipes.find((recipe) => {
                return recipe.title.toLowerCase() === value.toLowerCase();
              })?.title
            : "Search recipe..."}
          <SearchIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" w-[85vw] max-w-screen-sm p-0 sm:w-[70vw]">
        <Command>
          <ScrollArea className=" h-[200px] md:h-[300px]">
            <CommandInput placeholder="Search recipe..." />
            <CommandEmpty>No recipe found.</CommandEmpty>
            <CommandGroup>
              {recipes.map((recipe) => (
                <CommandItem
                  className="cursor-pointer"
                  key={recipe.title}
                  value={recipe.title}
                  onSelect={async (currentValue) => {
                    await router.push(`/recipes/${recipe.title}`);

                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === recipe.title ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {recipe.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
