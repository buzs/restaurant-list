import React, { FormEvent } from "react";

import * as S from "./styles"
import { IngredientsContext } from "../../contexts/IngredientListContext";
import { addIngredient } from "../../actions/IngredientsActions";

const AddIngredientForm: React.FC = () => {
  const { dispatch } = React.useContext(IngredientsContext);

  const [name, setName] = React.useState("");
  const [metric, setMetric] = React.useState("ml");

  const submit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(addIngredient({
      id: new Date().getTime().toString(),
      name,
      metric
    }))

    setName("");
  };

  return (
    <S.Wrapper>
      <S.InputText
        type="text"
        value={name}
        placeholder="Ingrediente"
        onChange={(e) => setName(e.target.value)}
      />
      <S.InputSelect value={metric} onChange={(e) => setMetric(e.target.value)}>
        <option value="g">gramas</option>
        <option value="kg">kilogramas</option>
        <option value="ml">mililitro</option>
        <option value="l">litro</option>
      </S.InputSelect>

      <S.Button onClick={submit}>Adicionar produto</S.Button>
    </S.Wrapper>
  );
};

export default AddIngredientForm;
