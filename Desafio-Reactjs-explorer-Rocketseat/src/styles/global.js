import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
    }
    body, input, textarea{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND};
        color: ${({ theme }) => theme.COLORS.WHITE};
        -webkit-font-smoothing: antialiased;   
    }
`