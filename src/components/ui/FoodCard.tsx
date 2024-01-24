import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function FoodCard() {
  return (
    <Card className="  max-w-xs rounded-xl    ">
      <CardHeader className="relative  mb-3 h-64 w-full">
        <Image
          src={"/images/chicken-wings.jpg"}
          className=" h-64  w-full   rounded-t-xl  object-cover"
          alt="a"
          fill
        />
      </CardHeader>

      <CardContent className="grid min-w-0 gap-4">
        <div className="flex flex-wrap ">
          <div className=" flex w-full flex-none items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-4 w-4 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-foreground-muted mr-3 whitespace-nowrap">
              4.60
            </span>
            <span className="mr-2 text-muted-foreground">Azerbaijan</span>
          </div>

          <div className="flex w-full min-w-0 items-center justify-between ">
            <h2 className="mr-auto  truncate text-lg   ">Chicken Wing</h2>
            <Badge
              variant={"secondary"}
              className="mx-2 flex min-w-fit items-center  bg-muted px-2 py-1 text-xs "
            >
              INSTOCK
            </Badge>
            <Badge className="max-w-fit ">Cut</Badge>
          </div>
          <div className="mt-1 text-xl font-semibold ">$240.00</div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add recipe
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FoodCard;
