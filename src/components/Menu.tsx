import React from "react";
import Header from "./Header";
import Recipe from "./Recipe";

type MenuProps = {
  recipes: {
    name: string;
    ingredients: { name: string; amount: number; measurement: string }[];
    steps: Array<string>;
  }[];
};

const Menu = ({ recipes }: MenuProps) => {
  return (
    <article>
      <Header text="Delicious Recipes" />
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))}
      </div>
    </article>
  );
};

export default Menu;
