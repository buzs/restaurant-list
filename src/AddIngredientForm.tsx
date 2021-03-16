import React from "react";
import { IngredientsListContext } from "./App";

const AddIngredientForm: React.FC = () => {
  const context = React.useContext(IngredientsListContext);

  const [name, setName] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [metric, setMetric] = React.useState("ml");

  const submit = () => {
    if (name === "" || weight === "") {
      return;
    }
    context.addIngredient(name, `${weight} ${metric}`);
    setName("");
    setWeight("");
  };

  return (
    <div>
      <input
        type="text"
        name={name}
        placeholder="Ingrediente"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name={weight}
        placeholder="Peso (kg ou ml)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <select value={metric} onChange={(e) => setMetric(e.target.value)}>
        <option value="g">g</option>
        <option value="kg">kg</option>
        <option value="ml">ml</option>
        <option value="l">l</option>
      </select>

      <button onClick={submit}>Adicionar produto</button>
    </div>
  );
};

export default AddIngredientForm;
