import { CarouselItem } from "@/components/ui/carousel";
import { useRouter } from "next/router";
import React from "react";
import { TypographyH2 } from "~/components/typography/TypographyH2";
import FoodCard from "~/components/ui/FoodCard";
import { filterRecipesByTag } from "~/recipes";

function Page() {
  const router = useRouter();
  const recipes = filterRecipesByTag(router.query.id as string);

  return (
    <div className="">
      <TypographyH2>{title}</TypographyH2>

      <p className="italic text-muted-foreground">
        Check these awesome {router.query.id} themed recipes out
      </p>

      <div className="mt-3 flex w-full justify-center">
        {recipes.map((item) => (
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
      </div>
    </div>
  );
}

export default Page;
