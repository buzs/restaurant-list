import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    }

    td, th {
        padding: .75rem;
        vertical-align: top;
        text-align: start;
    }

    input {
        background: transparent;
        border: none;
        font-size: 2rem;
        width: 10rem;
        text-align: end;
        color: #EDF2F7;
        font-weight: 800;
    }

    tbody tr:nth-of-type(odd) {
        background-color: rgba(0,0,0,.05)
    }
`