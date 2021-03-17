import { IngredientAction, IngredientItem } from "../reducers/IngredientsReducer";

export const addIngredient = (ingredient: IngredientItem): IngredientAction => ({
    type: "ADD",
    payload: ingredient
})

export const changeIngredientQuantity = (id: string, quantity: number): IngredientAction => ({
    type: "CHANGE_QUANTITY",
    payload: {id, quantity}
})

export const deleteIngredient = (id: string): IngredientAction => ({
    type: "DELETE",
    payload: id
})