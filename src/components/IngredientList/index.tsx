import React from "react";

import * as S from "./styles"
import { IngredientsListContext } from "../../App";

const IngredientList: React.FC = () => {
  const context = React.useContext(IngredientsListContext);

  return (
    <S.Wrapper>
      <S.Table>
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
    </S.Table>
    </S.Wrapper>
  );
};

export default IngredientList;
