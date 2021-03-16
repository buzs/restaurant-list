import React from "react";
import "./styles.css";

import IngredientList from "./IngredientList";
import AddIngredientForm from "./AddIngredientForm";

export const IngredientsListContext = React.createContext<
  IngredientsListContextType
>({
  ingredients: [],
  addIngredient: (name: string, weight: string) => {}
});

type IngredientsListContextType = {
  ingredients: ingredientType[];
  addIngredient: (name: string, weight: string) => void;
};

type ingredientType = {
  name: string;
  weight: string;
};

export default function App() {
  const [ingredients, setIngredients] = React.useState<ingredientType[]>([]);

  const addIngredient = (name: string, weight: string) => {
    const newIngredient = { name, weight };
    setIngredients((prevIngredients) => [...prevIngredients, { name, weight }]);
  };

  return (
    <IngredientsListContext.Provider value={{ ingredients, addIngredient }}>
      <div className="App">
        <AddIngredientForm />
        <IngredientList />
      </div>
    </IngredientsListContext.Provider>
  );
}
