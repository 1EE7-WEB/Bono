import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { ReactNode } from "react";
import { TypographyH2 } from "../typography/TypographyH2";

function Section({
  children,
  title,
  subTitle,
}: {
  children: ReactNode;
  title: ReactNode;
  subTitle: ReactNode;
}) {
  return (
    <div className="">
      <TypographyH2>{title}</TypographyH2>

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
