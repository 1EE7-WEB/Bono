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

function App() {
  const [a, setA] = useArrayState();
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const url =
        "https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "664c34bfcemsh5eec36ddeca6590p1e66f1jsn34d5ef06e779",
          "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isPending) return "Loading...";

  return (
    <div>
      {" "}
      <Section
        title={
          <>
            <span className="text-primary">Most </span>
            Popular
          </>
        }
        subTitle={<>Our most savory and favored meals!</>}
      >
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>{" "}
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
      </Section>
      <div className="py-12"></div>
      {/* <Section
        title={
          <>
            <span className="text-primary">Most </span>
            Popular
          </>
        }
        subTitle={<>Our most savory and favored meals!</>}
      >
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>{" "}
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
        <CarouselItem className=" basis-[95%] pl-2 md:basis-auto">
          {" "}
          <div className="p-1">
            <FoodCard />
          </div>
        </CarouselItem>
      </Section> */}
    </div>
  );
}

export default App;
