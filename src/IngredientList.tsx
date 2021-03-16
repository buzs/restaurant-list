import React from "react";
import { IngredientsListContext } from "./App";

const IngredientList = (props) => {
  const context = React.useContext(IngredientsListContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Ingrediente</th>
          <th>
            Peso <small>(kg|ml)</small>
          </th>
        </tr>
      </thead>
      <tbody>
        {context.ingredients.map((ingredient, index) => (
          <tr key={ingredient.name}>
            <td>{ingredient.name}</td>
            <td>{ingredient.weight}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientList;
