import React, { Reducer } from "react"

export type IngredientItem = {
    id: string;
    name: string;
    metric: string;
    quantity?: number;
  };

export type IngredientAction =
  | { type: 'ADD'; payload: IngredientItem }
  | { type: 'CHANGE_QUANTITY'; payload: Pick<IngredientItem, "id" | "quantity"> }
  | { type: 'DELETE'; payload: string }

export type IngredientState = {
    ingredients: IngredientItem[]
}

export type IngredientContextModel = {
    state: IngredientState;
    dispatch: React.Dispatch<IngredientAction>;
}

export const ingredientsReducer: Reducer<IngredientState, IngredientAction> = (state, action) => {
    switch(action.type) {
        case "ADD": 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case "CHANGE_QUANTITY": 
            return {
                ...state,
                ingredients: state.ingredients.map((item) => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item) 
            };
        case "DELETE":
            return {
                ...state,
                ingredients: state.ingredients.filter((item) => item.id !== action.payload)
            };
            
        default:
            return state;
    }
}