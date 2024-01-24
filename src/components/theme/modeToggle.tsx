import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle({ expandSidebar }: { expandSidebar: boolean }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <li
          tabIndex={0}
          className={`sidebarItem group flex cursor-pointer items-center rounded-md p-2 transition duration-200     ${
            expandSidebar
              ? " group scale-100 active:scale-95"
              : "justify-center"
          }  hover:bg-muted`}
        >
          <div className="flex items-center dark:hidden">
            <Sun className=" transition-all group-hover:text-foreground " />

            {expandSidebar ? (
              <span className="ms-3 capitalize">Light Mode</span>
            ) : null}
          </div>

          <div className="hidden items-center dark:flex">
            <div className="flex !h-6 !w-6 items-center justify-center">
              <Moon
                className=" 
               transition-all group-hover:text-foreground "
              />
            </div>

            {expandSidebar ? (
              <span className="ms-3 capitalize">Dark Mode</span>
            ) : null}
          </div>

          <span className="sr-only">Toggle theme</span>
        </li>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
