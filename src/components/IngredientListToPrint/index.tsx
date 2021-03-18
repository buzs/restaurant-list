import React, { Fragment } from "react";
import { IngredientsContext } from "../../contexts/IngredientListContext";

import IngredientItem from "../IngredientItem";

import * as S from "./styles"

const IngredientListToPrint: React.FC = () => {
  const { state: { ingredients } } = React.useContext(IngredientsContext);

  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th>Ingredientes</th>
            <th>Quantidade</th>
            <th>Metricas</th>
          </tr>
        </thead>
        <tbody>
          <Fragment>
            {ingredients.length > 0 
            ? 
              <Fragment>
                {ingredients.map((ingredient) => (<IngredientItem key={ingredient.id} ingredient={ingredient} />))}
              </Fragment> 
            : 
              <h3>Nenhum ingrediente encontrado</h3>}
          </Fragment>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default IngredientListToPrint;

