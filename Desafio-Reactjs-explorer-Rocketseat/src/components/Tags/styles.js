import styled from "styled-components";

export const Container = styled.span`
   
    font-size: 12px;    
    line-height: 14px;
    text-align: center;
    color: ${( { theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.TAGS_GRAY};
    border-radius: 8px;
    height: 30px;
    font-family: 'Roboto', serif;
    padding: 8px 16px;
    margin-right: 8px;

`