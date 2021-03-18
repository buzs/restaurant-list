import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.button`
    font-size: 1.6rem;
    padding: 0.28rem 0.8rem;
    border: none;
    background-color: #9E2A24;
    color: #E2E8F0;
    border-radius: 0.4rem;

    svg {
        padding-right: 0.5rem;
        height: 2.2rem;
    }
`

export const Table = styled.table`
    width: 100%;
    margin-top: 1rem;
    font-size: 2rem;
    background-color: rgba(10, 25, 47, .4);
    border-radius: .5rem;

    thead {
        color: #E2E8F0;
    }

    tbody {
        color: #EDF2F7;
        
        h3 {
            font-size: 2rem;
            font-weight: 500;
            text-align: center;
        }
    }

    td, th {
        padding: .75rem;
        vertical-align: top;
        text-align: start;
    }

    tbody tr:nth-of-type(odd) {
        background-color: rgba(0,0,0,.05)
    }
`