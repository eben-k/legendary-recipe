import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";

type RecipeProps = {
  name: string;
  ingredients: { name: string; amount: number; measurement: string }[];
  steps: Array<string>;
};

const Recipe = ({ name, ingredients, steps }: RecipeProps) => {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h2 className="heading-1">{name}</h2>
      <IngredientsList list={ingredients} />
      <Instructions title="Cooking Instructions" steps={steps} />
    </section>
  );
};

export default Recipe;
