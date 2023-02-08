import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');
    
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.light_gray};
        font-family: 'Outfit', sans-serif;
        margin: 0;
    }

    p {
        font-size: ${({theme}) => theme.font_size};
        color: ${({ theme }) => theme.colors.grayish_blue};
        font-weight: 400;
    }

    h1 {
        font-size: 20px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.dark_blue};
    }
`

export default GlobalStyles