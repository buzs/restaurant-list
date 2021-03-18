import styled from "styled-components";

import { Link as HomeLink, Wrapper as HomeWrapper } from "../Home/styles";
import { Button as FormButton } from "../../components/IngredientForm/styles";

export const Wrapper = HomeWrapper

export const Link = HomeLink

export const Title = styled.h2`
    color: #8cbdd1;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Button = FormButton;