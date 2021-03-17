import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 70rem;
    background: rgba(255, 255, 255, 0.32);
    padding: 3rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
`

export const Title = styled.h2`
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #8cbdd1;
`

export const Link = styled.a`
    font-size: 1.7rem;
    margin-top: 1.8rem;
    margin-right: 2.5rem;
    text-align: end;
    text-decoration: none;
    color: #8cbdd1;

    :hover {
        color: #6c96a7
    }
`