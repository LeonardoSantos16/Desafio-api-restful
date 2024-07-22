import styled from "styled-components";


export const Container = styled.div`
    width: 340px;
    display: flex;
    border-radius: 10px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_BUTTON};
    margin-bottom: 8px;
    height: 56px;
    > input{
        width: 340px;   
        background: transparent;
        border: none;
    }
    &:placeholder{
        color:  ${({theme}) => theme.COLORS.GRAY};
    }
    > svg {
        margin: 19px 12px;
        color:  ${({theme}) => theme.COLORS.GRAY};
  }
`
