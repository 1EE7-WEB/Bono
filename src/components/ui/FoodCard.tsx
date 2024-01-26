import Image from "next/image";
import React, { memo } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";

const FoodCard = memo(function FoodCard({
  title,
  imageHref,
  tag,
  author,
  price,
}: {
  title: string;
  imageHref: string;
  author: string;
  tag: string;
  price: string;
}) {
  return (
    <Card className="  rounded-xl md:max-w-xs    ">
      <CardHeader className="relative  mb-3 h-64 w-full">
        <Image
          src={imageHref}
          className=" h-64  w-full   rounded-t-xl  object-cover"
          alt="a"
          fill
        />
      </CardHeader>

      <CardContent className="grid min-w-0 gap-4">
        <div className="flex flex-wrap ">
          <div className=" flex w-full flex-none items-center text-sm">
            <span className="mr-2 text-muted-foreground">{author}</span>
          </div>

          <div className="flex w-full min-w-0 items-center justify-between ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <h2 className="mr-auto  truncate text-lg   ">{title}</h2>
                </TooltipTrigger>
                <TooltipContent>
                  <h2 className="mr-auto  truncate    ">{title}</h2>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* <Badge
              variant={"secondary"}
              className="mx-2 flex min-w-fit items-center  bg-muted px-2 py-1 text-xs "
            >
              INSTOCK
            </Badge> */}
            <Badge className="min-w-fit uppercase">{tag}</Badge>
          </div>
          <div className="mt-1 text-xl font-semibold  ">{price}</div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/recipes/${title}`}>
            <Plus className="mr-2 h-4 w-4" /> Add recipe
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
});

export default FoodCard;
