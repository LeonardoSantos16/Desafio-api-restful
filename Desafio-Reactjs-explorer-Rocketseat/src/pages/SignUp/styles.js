import {styled} from 'styled-components'
import backgroundImg from '../../assets/background.svg'
export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 136px;
    justify-content: center;
    
    >h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 48px;
        margin: 0;
        font-weight: 700;
    }

    >p{
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        margin: 0;
        color: ${({theme}) => theme.COLORS.GRAY_SUBTITLE};
    }

    >h2{
        width: 340px;
        font-size: 24px;
        margin: 48px 0;
        color: ${({ theme}) => theme.COLORS.WHITE};
        text-align: left;
    }

    >a{
        color: ${({ theme }) => theme.COLORS.PINK};
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




