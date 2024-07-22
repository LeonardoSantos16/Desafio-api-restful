import styled from "styled-components";


export const Container = styled.section`
    width: 100%;
    height: 222px;
    background-color: rgba(255, 133, 155, 0.05);
    border: none;
    border-radius: 16px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 24px;
    cursor: pointer;
    >p{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;

        max-height: 38px;
        margin-bottom: 15px;
        color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    }
    

`



export const Film = styled.header`
    display: flex;
    flex-direction: column;
    gap: 8px;
   
    >h2{
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({theme}) => theme.COLORS.WHITE};
    }
    
`

    