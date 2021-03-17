import React from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

import IngredientListToPrint from "../../components/IngredientListToPrint";

import * as S from "./styles";


const Home: React.FC = () => {
    const componetRef = React.useRef(null);


    const reactToPrintContent = React.useCallback(() => {
        return componetRef.current;
    }, [componetRef.current])


    const handlePrint = useReactToPrint({
        content: reactToPrintContent,
        documentTitle: "Lista de Compras"
    })

    return (
        <S.Wrapper>
            <S.Header>
                <S.Title>Lista de Compras</S.Title>
                <S.Button onClick={handlePrint}>Clique aqui para imprimir</S.Button>
            </S.Header>
            <div style={{ backgroundColor: "white" }} ref={componetRef}>
                <IngredientListToPrint />
            </div>
            <Link to="/">
                <S.Link>{"<"} Voltar para adicionar mais produtos</S.Link>
            </Link>
        </S.Wrapper>
    )
}

export default Home;