import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }

    h1, h2, h3, h4, h5, p, li {
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    button {
        font-family: 'Open Sans', sans-serif;
        user-select: none;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;
