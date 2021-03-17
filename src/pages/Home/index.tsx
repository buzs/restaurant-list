import React from "react";

import * as S from "./styles"

import IngredientForm from "../../components/IngredientForm";
import IngredientList from "../../components/IngredientList";

const Home: React.FC = () => {
    return (
        <S.Wrapper>
            <IngredientForm />
            <IngredientList />
        </S.Wrapper>
    )
}

export default Home;