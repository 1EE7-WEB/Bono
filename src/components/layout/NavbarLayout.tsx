/* eslint-disable react/no-unescaped-entities */
import { Input } from "@/components/ui/input";
import { LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { Dispatch } from "react";
import { UserAvatar, Username } from "../ui/UserAttributes";
import { SignOutButton } from "@clerk/nextjs";
import { Pacifico } from "next/font/google";

const pasifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

function NavbarLayout({
  setExpandSidebar,
  expandSidebar,
}: {
  setExpandSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  expandSidebar: boolean;
}) {
  const router = useRouter();
  function openSidebar() {
    if (!expandSidebar && window.innerWidth > 1200) {
      setExpandSidebar(true);
      localStorage.setItem("expandSidebar", "true");
    } else {
      setExpandSidebar(false);
      localStorage.setItem("expandSidebar", "false");
    }
  }

  return (
    <header className="border-b   bg-popover   px-5 py-5   md:px-10 ">
      <nav className=" mx-auto flex items-center justify-between ">
        <div className="flex flex-[0.3]  items-center gap-3">
          <button onClick={openSidebar}>
            <Menu size={32} className="mt-1" />
          </button>

          <Link
            href={"/"}
            className={` text-4xl font-semibold lowercase   ${pasifico.className}`}
          >
            <span className="text-orange-500">B</span>ono
          </Link>
        </div>

        <div className="  flex-[0.4]">
          <Input placeholder="Search" className=" " />
        </div>

        <div className="flex flex-[0.3]  items-center justify-end gap-4">
          <div className=" hidden items-center gap-4 lg:flex">
            <NavbarItem href="/track" title={"tracker"} />
            <NavbarItem href="/exercises" title={"exercises"} />
            <NavbarItem href="/track" title={"statistics"} />
          </div>

          {/* these components come from shadcn, a headless UI library that gives you all the control */}
          <DropdownMenu>
            <DropdownMenuTrigger className="ml-1 h-10 w-10">
              <UserAvatar />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="mx-3 w-56" sideOffset={28}>
              <DropdownMenuLabel>
                <div className="flex items-center">
                  <Username />
                  's Account
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <SignOutButton>
                <DropdownMenuItem>
                  Log Out{" "}
                  <DropdownMenuShortcut>
                    <LogOut size={14} />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </SignOutButton>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}

function NavbarItem({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-lg font-semibold capitalize text-foreground/60 hover:text-foreground/80"
    >
      {title}
    </Link>
  );
}

export default NavbarLayout;
