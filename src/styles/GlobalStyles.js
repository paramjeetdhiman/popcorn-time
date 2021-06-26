import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /// creating global variables
    :root{
        --maxWidth:1280px;
        --white:#fff;
        --lightGrey:#eee;
        --midGrey:#353535;
        --darkGrey:#1c1c1c;
        --fontBig:1.5rem;
        --fontMed:1.2rem;
        --fontSmall:1rem;
    }

    *{
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
        margin:0;
        
    }

    #root {
        background: #141414;
        height: 100%;
        width: 100%;
    }   

`;
