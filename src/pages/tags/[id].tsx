/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useRouter } from "next/router";
import React from "react";
import { TypographyH2 } from "~/components/typography/TypographyH2";
import FoodCard from "~/components/ui/FoodCard";
import { filterRecipesByTag } from "~/recipes";

function Page() {
  const router = useRouter();
  const tagName = router.query.id as string;
  const recipes = filterRecipesByTag(tagName);

  function capitalizeTitle() {
    // Split the string into an array of words

    // Capitalize the first letter of each word
    const capitalizedWords =
      tagName?.charAt(0).toUpperCase() + tagName?.slice(1);
    return capitalizedWords;
  }

  const title = capitalizeTitle();

  return (
    <div className="">
      <TypographyH2>{title}</TypographyH2>

      <p className="italic text-muted-foreground">
        Check these awesome {router.query.id} themed recipes out
      </p>

      <div className="mt-3 flex w-full flex-wrap justify-center  gap-4">
        {recipes.map((item) => (
          <div key={item.title} className=" mt-4 pl-2 md:basis-auto">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
