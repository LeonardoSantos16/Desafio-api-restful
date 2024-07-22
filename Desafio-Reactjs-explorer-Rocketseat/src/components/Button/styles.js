import { styled } from 'styled-components'

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border-radius: 10px;
    
    color: ${({theme}) => theme.COLORS.BLACK};
    padding: 0 16px;
    margin-top: 16px;
    border: none;
    cursor: pointer;
    background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.BACKGROUND_BLACK : theme.COLORS.PINK};
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.PINK: theme.COLORS.BACKGROUND_BLACK};
    font-weight: 500;
    


`


