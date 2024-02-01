import { CarouselItem } from "@/components/ui/carousel";
import React from "react";
import FoodCard from "~/components/ui/FoodCard";
import Section from "~/components/ui/Section";
import { filterRecipesByTag } from "../recipes";

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
            className=" basis-[95%]  pl-2 md:basis-auto"
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
