import React from "react";

import * as S from "./styles"

import IngredientForm from "../../components/IngredientForm";
import IngredientList from "../../components/IngredientList";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <S.Title>Adicionar Produtos</S.Title>
            <S.Wrapper>
                <IngredientForm />
                <IngredientList />
                <Link to="/shoplist">
                    <S.Link>Ir para a Lista de Compras {">"} </S.Link>
                </Link>
            </S.Wrapper>
        </>
    )
}

export default Home;