/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TypographyH2 } from "~/components/typography/TypographyH2";
import { useRouter } from "next/router";
import { recipes } from "../../../../recipes";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FormIngredients } from "~/components/recipes/Form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TimerCountdown, { Stopwatch } from "~/components/recipes/Timer";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Page() {
  const router = useRouter();
  const foundRecipe = recipes.find((recipe) => {
    return recipe.title === router.query.id;
  });

  const instructions: { name: string; id: string }[] = foundRecipe
    ? foundRecipe.directions.map((instruction) => {
        const uniqueId = Math.ceil(Math.random() * 1000000000).toString();
        return { name: instruction, id: uniqueId };
      })
    : [{ name: "", id: "" }];

  const instructionIndex = router.query.instruction;

  if (!instructionIndex || !(typeof instructionIndex === "string")) return;

  const instruction = instructions[parseInt(instructionIndex) - 1];

  async function nextInstruction() {
    //redo cuz async
    if (!instructionIndex || !(typeof instructionIndex === "string")) return;

    const url = {
      pathname: router.pathname,
      query: {
        ...router.query,
        instruction: parseInt(instructionIndex) + 1,
      },
    };

    await router.push(url);
  }

  async function prevInstruction() {
    //redo cuz async
    if (!instructionIndex || !(typeof instructionIndex === "string")) return;

    const url = {
      pathname: router.pathname,
      query: {
        ...router.query,
        instruction: parseInt(instructionIndex) - 1,
      },
    };

    await router.push(url);
  }

  async function cancelInstruction() {
    const newURL = router.asPath.replace(/\/instructions\/\d+/, "");

    await router.replace(newURL);
  }

  async function doneInstruction() {
    //TODO: ADD POPUP

    await router.push("/ ");
  }

  if (!foundRecipe) console.error("no found recipe");

  return (
    <div className="flex h-full  flex-col">
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

      {/* add avatar here if we have time left */}
      <div className="mt-6 flex h-full flex-col  px-10">
        <div>
          <p className="my-3  text-3xl font-semibold">
            Step #{instructionIndex}
          </p>
          <div className=" flex h-1 items-center gap-3  ">
            {instructions.map((instruction, index) => {
              return (
                <div
                  key={instruction.id}
                  className={`${
                    index === parseInt(instructionIndex) - 1
                      ? "bg-primary"
                      : "bg-muted"
                  } h-full flex-1 `}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="mb-4 mt-4 flex-1 text-2xl  font-semibold sm:mb-0">
          <div>{instruction?.name}</div>

          <div className="flex h-[100%] justify-center gap-8 px-12">
            <div className="flex w-full flex-col items-center justify-between gap-12 py-12 xl:max-w-screen-lg xl:flex-row xl:gap-12">
              <TimerCountdown />
              <Stopwatch />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Button
              disabled={parseInt(instructionIndex) <= 1}
              className=" max-w-min "
              onClick={prevInstruction}
              type="submit"
            >
              <ChevronLeft size={18} />
            </Button>
            <Button
              disabled={parseInt(instructionIndex) >= instructions.length}
              className=" max-w-min "
              onClick={nextInstruction}
              type="submit"
            >
              <ChevronRight size={18} />
            </Button>
          </div>

          {parseInt(instructionIndex) >= instructions.length ? (
            <Button variant={"default"} className=" " onClick={doneInstruction}>
              Done
            </Button>
          ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"outline"} className=" ">
                  Cancel
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You're so close to finishing! it's not worth giving up.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Return </AlertDialogCancel>
                  <AlertDialogAction onClick={cancelInstruction}>
                    Cancel anyways
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
