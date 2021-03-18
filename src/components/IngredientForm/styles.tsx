import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
    padding: 2rem;
    background: #96ACB7;
    border-radius: 1rem;
    display: flex;
    align-content: center;
    justify-content: center;
`;

export const InputText = styled.input`
    padding: 0.5rem;
    font-size: 1.8rem;
    margin: 0 0.8rem;
`;

export const InputSelect = styled.select`
    padding: 0.5rem;
    font-size: 1.8rem;
`

export const Button = styled.button`
    margin-left: 1rem;
    font-size: 1.6rem;
    padding: 0.8rem 1rem;
    background: #E67139;
    color: #E2E8F0;
    font-weight: 600;
    border: 0;
    border-radius: 0.6rem;
    align-items: center;

    svg {
        height: 2.5rem;
    }
`