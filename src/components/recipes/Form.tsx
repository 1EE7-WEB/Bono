"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ChevronRight, ShoppingBasket, SkipForward } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { useRouter } from "next/router";
import { useState } from "react";
import { useUnusedIngredients } from "~/hooks/state/useUnusedIngredients";

const FormSchema = z.object({
  //throws error if u dont have more than 1 item, btw zod is like if typescript was checked statically.
  //https://zod.dev/
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function FormIngredients({
  ingredients,
}: {
  ingredients: { name: string; id: string; price: number }[];
}) {
  const router = useRouter();
  const [checkoutDialogue, setCheckoutDialogue] = useState(false);
  //the global state which we're going to push the non used ingredients into so we can use them at checkout
  const addIngredients = useUnusedIngredients(
    (state) => state.addIngredientsToBasket,
  );
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });
  const ticked = form.watch().items;

  async function goToIngredients() {
    const url = {
      pathname: router.asPath + "/instructions/1",
    };

    await router.push(url, undefined, {
      shallow: true,
    });
  }

  async function checkIngredients() {
    //it doesnt matter if the user can go to the instructions straight up, since its just a recipe app.
    //return early if all ingredients present
    if (ticked.length === ingredients.length) {
      setCheckoutDialogue(false);

      await goToIngredients();

      return;
    }

    if (ticked.length === 0) {
      //because already error exists for that

      return;
    }

    //make a popup
    setCheckoutDialogue(true);
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await checkIngredients();
  }

  function unusedIngredients() {
    return ingredients.filter((obj) => !ticked.includes(obj.name));
  }

  async function goToCheckout() {
    addIngredients(unusedIngredients());

    const url = {
      pathname: router.asPath + "/checkout",
    };

    await router.push(url, undefined, {
      shallow: true,
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="col-span-2   space-y-8 "
      >
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem className="flex  flex-wrap gap-3 ">
              {ingredients.map((item, index) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="  h-full basis-full  space-y-0 md:basis-[48%] lg:basis-[32.8%] [&:nth-child(1)]:mt-2 "
                      >
                        <Card className="">
                          <>
                            <FormLabel className="cursor-pointer text-2xl font-normal ">
                              <CardHeader className="pb-3">
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>
                                  Ingredient #{index + 1}
                                </CardDescription>
                              </CardHeader>
                            </FormLabel>

                            <CardContent className=" flex items-center pb-4">
                              <FormControl>
                                <Checkbox
                                  className="h-7 w-7 rounded-md"
                                  checked={field.value?.includes(item.name)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.name,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.name,
                                          ),
                                        );
                                  }}
                                />
                              </FormControl>
                            </CardContent>
                          </>
                        </Card>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          {ticked.length === ingredients.length ? (
            <Button type="submit" className="gap-1">
              Continue <ChevronRight size={16} />
            </Button>
          ) : (
            <Button type="button" onClick={goToCheckout} className="gap-1">
              Get Ingredients <ShoppingBasket size={16} />
            </Button>
          )}

          <AlertDialog
            open={checkoutDialogue}
            onOpenChange={setCheckoutDialogue}
          >
            <Button
              type="submit"
              disabled={ticked.length === ingredients.length}
              variant={"outline"}
            >
              Skip{" "}
            </Button>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Continuing on with the recipe without the required ingredients
                  may cause the result to come out subpar.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={goToIngredients}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </form>
    </Form>
  );
}
