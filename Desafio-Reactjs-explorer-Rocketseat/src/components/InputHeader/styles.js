import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    display: flex;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON};
    margin-bottom: 8px;
    height: 56px;
    max-width: 630px;
    > input{
        width: 100%;
        
        padding: 19px 24px;
        background: transparent;
        border: none;
        
    }
    &:placeholder{
        color:  ${({theme}) => theme.COLORS.GRAY};
    }
    > svg {
    padding: 16px 18px;
    color:  ${({theme}) => theme.COLORS.GRAY};
  }
`
