import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Avatar, { UserAvatar } from "../ui/UserAttributes";
import { LogIn } from "lucide-react";
import { ModeToggle } from "~/components/theme/modeToggle";

export function Sidebar({ expandSidebar }: { expandSidebar: boolean }) {
  return (
    <nav
      className={` ${
        expandSidebar ? "w-64" : "w-20 justify-center"
      }   border-r border-r-border bg-popover transition-transform dark:border-r-0 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col justify-between overflow-y-auto   px-3 py-4">
        <ul className=" space-y-2 font-medium">
          <SidebarItem
            href="/"
            expandSidebar={expandSidebar}
            title="Dashboard"
            icon={
              <svg
                //group hover has to be repeated here as it cannot be referenced in the css file
                className="  group-hover:text-foreground"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
            }
          />

          <ModeToggle expandSidebar={expandSidebar} />
        </ul>

        <CTA expandSidebar={expandSidebar} />
      </div>
    </nav>
  );
}

//components + tailwind is a beautiful way to finegrain your css without repeating yourself 20 times
export function SidebarItem({
  href,
  icon,
  title,
  expandSidebar,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  expandSidebar: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={`sidebarItem group flex items-center rounded-md p-2 transition duration-200     ${
          expandSidebar ? " scale-100  active:scale-95" : "justify-center"
        }  hover:bg-muted`}
      >
        <div className="flex !h-6 !w-6 items-center justify-center">{icon}</div>
        {expandSidebar ? (
          <span className="ms-3 capitalize">{title}</span>
        ) : null}
      </Link>
    </li>
  );
}

function CTA({ expandSidebar }: { expandSidebar: boolean }) {
  const [closeCta, setCloseCTA] = useState(false);
  return (
    <div
      id="dropdown-cta"
      className={`mt-auto ${
        !expandSidebar || closeCta ? "hidden" : "block"
      } rounded-lg bg-blue-50 p-4 dark:bg-blue-900`}
      role="alert"
    >
      <div className="mb-3 flex items-center">
        <span className="me-2 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-semibold text-orange-800 dark:bg-orange-200 dark:text-orange-900">
          Beta
        </span>
        <button
          onClick={() => setCloseCTA(true)}
          type="button"
          className="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6  items-center justify-center rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-gray-800/50"
          aria-label="Close"
        >
          {/* for accesibility screen reader */}
          <span className="sr-only">Close</span>
          <svg
            className="h-2.5 w-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
        Since this site is made purely for demonstration purposes, the prices
        and delivery are not ready yet.
      </p>
    </div>
  );
}
