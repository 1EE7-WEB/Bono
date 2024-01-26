import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { TypographyH2 } from "~/components/typography/TypographyH2";
import FoodCard from "~/components/ui/FoodCard";
import Layout from "~/components/layout/Layout";
import Section from "~/components/ui/Section";
import { useQuery } from "@tanstack/react-query";
import useArrayState from "~/hooks/useArrayState";
import { filterRecipesByTag, recipes } from "../recipes";
import { TypographyH1 } from "~/components/typography/TypographyH1";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const pasifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});
console.log("aasdasd");
function App() {
  const handPicked = filterRecipesByTag("hand-picked");
  const vegeterian = filterRecipesByTag("vegetarian");
  const baking = filterRecipesByTag("baking");
  const sides = filterRecipesByTag("sides");

  //id as title works because this array has no same title and is completely unique

  return (
    <div>
      <Section
        tagHref="hand-picked"
        title={
          <>
            <span className="text-primary">Most </span>
            Popular
          </>
        }
        subTitle={<>Our most savory and favored meals!</>}
      >
        {handPicked.map((item) => (
          <CarouselItem
            key={item.title}
            className=" basis-[95%] pl-2 md:basis-auto"
          >
            {" "}
            <div className="p-1">
              <FoodCard
                tag={item.tags[0] ? item.tags[0] : ""}
                author="Bono"
                imageHref={item.image}
                price={item.priceText}
                title={item.title}
              />
            </div>
          </CarouselItem>
        ))}
      </Section>

      <div className=" my-16 "></div>
      <Section
        tagHref="vegetarian"
        title={
          <>
            <span className="text-primary">Vegetarian </span>
            Choices
          </>
        }
        subTitle={<>For all of our vegetarian users!</>}
      >
        {vegeterian.map((item) => (
          <CarouselItem
            key={item.title}
            className=" basis-[95%] pl-2 md:basis-auto"
          >
            {" "}
            <div className="p-1">
              <FoodCard
                tag={item.tags[0] ? item.tags[0] : ""}
                author="Bono"
                imageHref={item.image}
                price={item.priceText}
                title={item.title}
              />
            </div>
          </CarouselItem>
        ))}
      </Section>
      <div className="py-12"></div>

      <Section
        tagHref="baking"
        title={
          <>
            <span className="text-primary">Baking </span>
            Choices
          </>
        }
        subTitle={
          <>Pop it in the oven and get some of that delicious goodness!</>
        }
      >
        {baking.map((item) => (
          <CarouselItem
            key={item.title}
            className=" basis-[95%] pl-2 md:basis-auto"
          >
            {" "}
            <div className="p-1">
              <FoodCard
                tag={item.tags[0] ? item.tags[0] : ""}
                author="Bono"
                imageHref={item.image}
                price={item.priceText}
                title={item.title}
              />
            </div>
          </CarouselItem>
        ))}
      </Section>
      <div className="py-12"></div>

      <Section
        tagHref="sides"
        title={
          <>
            <span className="text-primary">Side </span>
            Dishes
          </>
        }
        subTitle={<>Eat some sides boy</>}
      >
        {sides.map((item) => (
          <CarouselItem
            key={item.title}
            className=" basis-[95%] pl-2 md:basis-auto"
          >
            {" "}
            <div className="p-1">
              <FoodCard
                tag={item.tags[0] ? item.tags[0] : ""}
                author="Bono"
                imageHref={item.image}
                price={item.priceText}
                title={item.title}
              />
            </div>
          </CarouselItem>
        ))}
      </Section>
    </div>
  );
}

export default App;
