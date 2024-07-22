import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.header`
    width: 100%;
    height: 116px;
    
    border-bottom: 1px solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.LINE};
`   
export const Profile = styled.div`
    text-decoration: none;
    display: flex;
    width: 1120px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
 
    padding: 30px 0;
  
    >h1{
        line-height: 32px;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
    >div{
        display: flex;
        gap: 9px;
        >.text{
            display: flex;
            flex-direction: column;
            align-items: end;
            justify-content: center;
            span{
                font-size: 14px;
                line-height: 18px;
                font-weight: 700;
                color: ${({theme}) => theme.COLORS.WHITE};
            }
            button{
                
            }
        }
        img{
            height: 64px;
            width: 64px;
            border-radius: 50%;
            cursor: pointer;
        }
    }
`
export const Logout = styled.button`
    font-weight: 400;
    font-size: 14px;
    width: 30px;
    line-height: 18px;
    color: ${({theme}) => theme.COLORS.GRAY};
    background: none;
    text-align: end;
    cursor: pointer;
`


