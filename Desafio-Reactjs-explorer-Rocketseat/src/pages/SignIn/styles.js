import {styled} from 'styled-components'
import backgroundImg from '../../assets/background.svg'
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
 
    justify-content: center;
    padding: 0 136px;
    >h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 48px;
        /* RocketMovies */
        font-weight: 700;
        line-height: 63px;
    }
    >p{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: ${({theme}) => theme.COLORS.GRAY_SUBTITLE};
        
    }

    >h2{
        width: 340px;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme}) => theme.COLORS.WHITE};
        margin: 48px 0;
        
        text-align: left;
    }
    >a{
        color: ${({ theme }) => theme.COLORS.PINK};
        
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        text-align: center;
        text-decoration: none;
        margin-top: 42px;
    }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`




