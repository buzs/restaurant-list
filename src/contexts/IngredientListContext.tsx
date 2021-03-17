import React, { createContext, useEffect, useReducer } from "react";
import { IngredientContextModel, ingredientsReducer, IngredientState } from "../reducers/IngredientsReducer";

const initialState: IngredientState = {
    ingredients: []
}

const initializer = (initialValue = initialState) => {
    const storageIngredients = localStorage.getItem('@restaurant:ingredients')
    if (storageIngredients) {
        return {
            ingredients: JSON.parse(storageIngredients)
        }
    }

    return initialValue
}

export const IngredientsContext = createContext({} as IngredientContextModel);
const IngredientsContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(ingredientsReducer, initialState, initializer)

    useEffect(() => {
        console.log("Products updated in local storage", state.ingredients)
        localStorage.setItem("@restaurant:ingredients", JSON.stringify(state.ingredients))
    }, [state.ingredients])

    return (
        <IngredientsContext.Provider value={{ state, dispatch }}>
            {children}
        </IngredientsContext.Provider>
    )
}

export default IngredientsContextProvider;