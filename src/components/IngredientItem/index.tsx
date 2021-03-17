import React, { useCallback, useState } from "react";
import { changeIngredientQuantity } from "../../actions/IngredientsActions";
import { IngredientsContext } from "../../contexts/IngredientListContext";
import debauce from "lodash/debounce";

type IngrediantItem = {
    ingredient: {
        id: string,
        name: string,
        quantity?: number,
        metric: string
    }
}

const IngredientItem: React.FC<IngrediantItem> = ({ ingredient : { id, name, quantity, metric }}) => {
  const { dispatch } = React.useContext(IngredientsContext);

  const [itemQuantity, setItemQuantity] = useState(quantity)

    const debounced = useCallback(
        debauce((quantity) => {
            dispatch(changeIngredientQuantity(id, Number(quantity)))
        }, 1000),
    [])

  const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
      const quantity = Number(e.target.value);
    setItemQuantity(quantity);

    debounced(quantity)
  }

  return (
    <tr key={id}>
        <td>{name}</td>
        <td>
            <input type="number" value={itemQuantity} onChange={
                (e) => updateQuantity(e, id)
            } 
            name="quantity"/>
        </td>
        <td>{metric}</td>
    </tr>
  );
};

export default IngredientItem;
