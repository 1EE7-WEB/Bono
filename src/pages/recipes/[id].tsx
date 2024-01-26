import React from "react";
import { TypographyH2 } from "~/components/typography/TypographyH2";
import { useRouter } from "next/router";
import { recipes } from "../../recipes";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { FormIngredients } from "~/components/recipes/Form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Page() {
  const router = useRouter();
  const foundRecipe = recipes.find((recipe) => {
    return recipe.title === router.query.id;
  });

  const ingredients: { name: string; id: string; price: number }[] = foundRecipe
    ? foundRecipe.ingredients.map((ingredient) => {
        const uniqueId = Math.ceil(Math.random() * 1000000000).toString();
        return {
          name: ingredient.name,
          id: uniqueId,
          price: ingredient.price,
        };
      })
    : [{ name: "", id: "", price: 0 }];

  return (
    <div className="">
      <div className="flex  gap-2">
        <Avatar className="mt-[6px] h-8 w-8">
          <AvatarImage src={foundRecipe?.image} />
          <AvatarFallback>
            {foundRecipe?.title.toUpperCase().substring(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div>
          <TypographyH2>{foundRecipe?.title}</TypographyH2>
          <p className="-mt-1 text-muted-foreground">Made by Bono </p>
        </div>
      </div>

      <div className="mt-4 ">
        <FormIngredients ingredients={ingredients} />{" "}
      </div>
    </div>
  );
}

export default Page;
