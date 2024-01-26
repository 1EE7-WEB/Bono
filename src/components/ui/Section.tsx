import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { ReactNode } from "react";
import { TypographyH2 } from "../typography/TypographyH2";
import Link from "next/link";

function Section({
  children,
  title,
  subTitle,
  tagHref,
}: {
  children: ReactNode;
  title: ReactNode;
  tagHref: string;
  subTitle: ReactNode;
}) {
  return (
    <div className="">
      <Link href={`tags/${tagHref}`}>
        <TypographyH2>{title}</TypographyH2>
      </Link>

      <p className="italic text-muted-foreground">{subTitle}</p>

      <div className="mt-3 flex w-full justify-center">
        <SectionCarousel>{children}</SectionCarousel>
      </div>
    </div>
  );
}

function SectionCarousel({ children }: { children: ReactNode }) {
  return (
    <Carousel className="w-full xl:w-[95%]">
      <CarouselContent className="">{children}</CarouselContent>

      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  );
}

export default Section;
