import React from "react";

import * as S from "./styles"
import { IngredientsListContext } from "../../App";

const AddIngredientForm: React.FC = () => {
  const context = React.useContext(IngredientsListContext);

  const [name, setName] = React.useState("");
  const [metric, setMetric] = React.useState("ml");

  const submit = () => {
    if (name === "" || metric === "") {
      return;
    }
    context.addIngredient(name, metric);
    setName("");
  };

  return (
    <S.Wrapper>
      <S.InputText
        type="text"
        name={name}
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
