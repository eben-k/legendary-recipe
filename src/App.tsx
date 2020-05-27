import React from "react";

import './App.scss';
import Menu from "./components/Menu";
import recipeData from "./data/recipes.json";

function App() {
  return <Menu recipes={recipeData} />;
}

export default App;
