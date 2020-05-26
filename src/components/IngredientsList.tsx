import React from "react";
import Ingredient from "./Ingredient";

type IngredientListProps = {
  list: { name: string; amount: number; measurement: string }[];
};

const IngredientsList = ({ list }: IngredientListProps) => {
  return (
    <ul className="ingredients">
      {list.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient} />
      ))}
    </ul>
  );
};

export default IngredientsList;
