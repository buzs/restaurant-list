import React from "react";
import { IngredientsListContext } from "../../App";

const IngredientList: React.FC = () => {
  const context = React.useContext(IngredientsListContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Ingredientes</th>
          <th>
            Metricas
          </th>
        </tr>
      </thead>
      <tbody>
        {context.ingredients.map((ingredient, index) => (
          <tr key={ingredient.name}>
            <td>{ingredient.name}</td>
            <td>{ingredient.metric}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientList;