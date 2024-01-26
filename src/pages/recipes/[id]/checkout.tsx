import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { TypographyH2 } from "~/components/typography/TypographyH2";
import { Username } from "~/components/ui/UserAttributes";
import { recipes } from "~/recipes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { ChevronLeft, DollarSign } from "lucide-react";
import { useUnusedIngredients } from "~/hooks/state/useUnusedIngredients";
import { Princess_Sofia } from "next/font/google";

//TODO: maybe add form checking

function Checkout() {
  const router = useRouter();
  const ingredients = useUnusedIngredients((state) => state.ingredients);

  const foundRecipe = recipes.find((recipe) => {
    return recipe.title === router.query.id;
  });

  if (!foundRecipe) return "";

  const checkoutPrice = ingredients.reduce(
    (total, ingredient) => total + ingredient.price,
    0,
  );

  return (
    <div className="  py-5">
      <div className="px-5">
        <div className="mb-2">
          <Button
            onClick={() => router.back()}
            variant={"ghost"}
            className="-mx-4 text-sm  hover:underline focus:outline-none"
          >
            <ChevronLeft size={16} />
            Back
          </Button>
        </div>

        <div className="mb-2">
          <h1 className="text-3xl font-bold  md:text-5xl">Checkout</h1>
        </div>

        <div className="mb-5 ">
          <Link href="/" className=" hover:underline focus:outline-none">
            Home
          </Link>{" "}
          /{" "}
          <Link
            href={{ pathname: router.asPath.replace("checkout", "") }}
            className=" hover:underline focus:outline-none"
          >
            Recipe
          </Link>{" "}
          / <span className="">Checkout</span>
        </div>
      </div>

      <div className="w-full  border-t border-muted  px-5 py-10 ">
        <div className="w-full">
          <div className="-mx-3 items-start md:flex">
            <div className="px-3 md:w-7/12 lg:pr-10">
              <div className="mx-auto mb-6 w-full border-b border-muted pb-6  ">
                <div className="flex w-full items-center">
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-muted ">
                    <Image
                      fill
                      src={foundRecipe?.image}
                      className="bg-cover object-cover"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-semibold uppercase ">
                      {foundRecipe?.title}
                    </h6>
                    <p className="">x 1</p>
                  </div>
                  <div>{foundRecipe.priceText}</div>
                </div>
              </div>

              <div className="mb-6 border-b border-muted pb-6">
                <ul className=" items-end  justify-end">
                  {ingredients.map((ingredient) => (
                    <li
                      className="flex  list-disc   items-center justify-between py-1 text-lg"
                      key={ingredient.name}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-primary">x1</span>
                        <p>{ingredient.name}</p>{" "}
                      </div>

                      <div className="text-sm font-semibold ">
                        ₼ {ingredient.price}.00
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6 border-b border-muted pb-6 ">
                <div className="mb-3 flex w-full items-center">
                  <div className="flex-grow">
                    <span className="">Subtotal</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">₼ {checkoutPrice}.00</span>
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <div className="flex-grow">
                    <span className="">Delivery </span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">₼ 2.00</span>
                  </div>
                </div>
              </div>
              <div className="mb-6 border-b border-muted pb-6 text-xl  md:border-none">
                <div className="flex w-full items-center">
                  <div className="flex-grow">
                    <span className="">Total</span>
                  </div>
                  <div className="pl-3">
                    <span className="font-semibold">
                      ₼ {checkoutPrice + 2}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-5/12">
              <div className="mx-auto mb-6 w-full rounded-lg border border-muted  p-3  ">
                <div className="mb-3 flex w-full items-center">
                  <div className="w-32">
                    <span className="font-semibold ">Contact</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <Username />
                  </div>
                </div>
                <div className="flex w-full items-center">
                  <div className="w-32">
                    <span className="font-semibold ">Billing Address</span>
                  </div>
                  <div className="flex-grow pl-3">
                    <span>Baku, Azerbaijan</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto mb-6 w-full rounded-lg border border-muted   ">
                <div className="w-full border-b border-muted p-3">
                  <div>
                    <div className="mb-3">
                      <label className=" ml-1 text-sm font-semibold ">
                        Name on card
                      </label>
                      <div>
                        <Input
                          className="mb-1 mt-2 w-full rounded-md border border-muted px-3 py-2 transition-colors  "
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 ml-1 text-sm font-semibold ">
                        Card number
                      </label>
                      <div>
                        <Input
                          placeholder="0000 0000 0000 0000"
                          className=" mt-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="-mx-2 mb-3 flex items-end">
                      <div className=" px-2">
                        <label className=" ml-1 text-sm font-semibold ">
                          Expiration date
                        </label>

                        <div className="mt-1">
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select month" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="January">January</SelectItem>
                                <SelectItem value="February">
                                  February
                                </SelectItem>
                                <SelectItem value="March">March</SelectItem>
                                <SelectItem value="April">April</SelectItem>
                                <SelectItem value="May">May</SelectItem>
                                <SelectItem value="June">June</SelectItem>
                                <SelectItem value="July">July</SelectItem>
                                <SelectItem value="August">August</SelectItem>
                                <SelectItem value="September">
                                  September
                                </SelectItem>
                                <SelectItem value="October">October</SelectItem>
                                <SelectItem value="November">
                                  November
                                </SelectItem>
                                <SelectItem value="December">
                                  December
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className=" px-2">
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2025">2025</SelectItem>
                              <SelectItem value="2026">2026</SelectItem>
                              <SelectItem value="2027">2027</SelectItem>
                              <SelectItem value="2028">2028</SelectItem>
                              <SelectItem value="2029">2029</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className=" px-2">
                        <label className="mb-2 ml-1 mt-2 text-sm font-semibold ">
                          Security code
                        </label>
                        <div>
                          <Input className=" mt-1" type="text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Button
                  className="w-full"
                  onClick={() =>
                    router.push(router.asPath.replace("checkout", "delivery"))
                  }
                >
                  PAY NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
