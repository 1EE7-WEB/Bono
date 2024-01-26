import { create } from "zustand";

type State = {
  ingredients: { name: string; price: number }[];
};

type Action = {
  addIngredientsToBasket: (ingredient: State["ingredients"]) => void;
};
export const useUnusedIngredients = create<State & Action>((set) => ({
  ingredients: [],

  addIngredientsToBasket: (ingredients) => set({ ingredients: ingredients }),
}));
