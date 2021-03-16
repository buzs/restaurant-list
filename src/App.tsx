import React from "react";
import "./styles.css";

import GlobalStyle from "./styles/global"

import Home from "./pages/Home";

export const IngredientsListContext = React.createContext<
  IngredientsListContextType
>({
  ingredients: [],
  addIngredient: (name: string, metric: string) => {}
});

type IngredientsListContextType = {
  ingredients: ingredientType[];
  addIngredient: (name: string, metric: string) => void;
};

type ingredientType = {
  name: string;
  metric: string;
};

const App: React.FC = () => {
  const [ingredients, setIngredients] = React.useState<ingredientType[]>([]);

  const addIngredient = (name: string, metric: string) => {
    const newIngredient = { name, metric };
    setIngredients((prevIngredients) => [...prevIngredients, { name, metric }]);
  };

  return (
    <IngredientsListContext.Provider value={{ ingredients, addIngredient }}>
      <GlobalStyle />
      <Home />
    </IngredientsListContext.Provider>
  );
}

export default App;