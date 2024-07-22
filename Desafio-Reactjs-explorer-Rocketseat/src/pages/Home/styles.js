import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
 
    >main{
        width: 1120px;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        
        >article{
            overflow-y: scroll;
            scrollbar-width: thin;
            scrollbar-color: #FF859B #1C1B1E;
            padding-right: 8px;
        }

        >header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            >h1{
                font-weight: 400;
                font-size: 32px;
                line-height: 42px;
            }
        }
    }
`
export const NewFilm = styled(Link)`
    width: 200px;
    height: 48px;
    border: none;            
    border-radius: 8px;            
    font-size: 16px;
    line-height: 21px;
    color: ${({ theme }) => theme.COLORS.BLACK};
    padding: 13px 32px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 2.5;
    text-decoration: none;

`