import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    >main{
        width: 1120px;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 0px 24px 16px 0px;
        
        >h2{
            font-weight: 400;
            font-size: 20px;
            line-height: 26px;
            color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
        }
        >.marcadores{
            display: flex;
            background-color:${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
            align-items: flex-start;
            border-radius: 8px;
            padding: 16px;
            gap: 24px;
         
    }
    >footer{
        display: flex;
        gap: 40px;
    }
}
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;
    >.inputs{
        display: flex;
        gap: 40px;
        height: 55px;
    }
`

export const Nav = styled.div`
    >a{
        color: ${({ theme }) => theme.COLORS.PINK};
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        margin-bottom: 24px;
        text-decoration: none;
    }
    >h1{
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;
    }
`
