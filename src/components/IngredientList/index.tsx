import React, { Fragment } from "react";
import { deleteIngredient } from "../../actions/IngredientsActions";
import { IngredientsContext } from "../../contexts/IngredientListContext";

import { Trash } from "@styled-icons/ionicons-outline/Trash";

import * as S from "./styles"


const IngredientList: React.FC = () => {
  const { state: { ingredients }, dispatch } = React.useContext(IngredientsContext);

  const deleteHandler = (id: string) => dispatch(deleteIngredient(id));

  return (
    <S.Wrapper>
      <S.Table>
        <thead>
          <tr>
            <th></th>
            <th>Ingredientes</th>
            <th>
              Metricas
            </th>
          </tr>
        </thead>
        <tbody>
          <Fragment>
            {ingredients.length > 0 ? <Fragment>
              {ingredients.map(({id, name, metric}) => (
                <tr key={name}>
                  <td><S.Button onClick={() => deleteHandler(id)}> <Trash />Remover</S.Button></td>
                  <td>{name}</td>
                  <td>{metric}</td>
                </tr>
                ))}
            </Fragment> : <h3>No data</h3>}
          </Fragment>
        </tbody>
      </S.Table>
    </S.Wrapper>
  );
};

export default IngredientList;

