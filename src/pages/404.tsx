import { Button } from "@/components/ui/button";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Custom404() {
  return (
    <div className="relative  flex h-full items-center justify-center ">
      <div className="z-10 flex flex-1 flex-col items-center justify-center">
        <h1 className=" text-center  text-4xl font-bold tracking-wider  lg:text-7xl xl:text-[130px]">
          404
        </h1>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <p className="text-2xl font-semibold uppercase text-secondary-foreground xl:text-3xl">
            Page not found
          </p>
        </div>

        <div className="mt-6 flex   items-center gap-3">
          <Link href="/ ">
            <Button className="py-6 text-lg" size={"lg"}>
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
