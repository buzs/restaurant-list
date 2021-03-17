import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%
    }

    body {
        font-family: 'Roboto', sans-serif; 
        font-size: 1.6rem;
    }

    html, body, #root {
        height: 100%;
        background: rgb(10, 25, 47);
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`