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
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`