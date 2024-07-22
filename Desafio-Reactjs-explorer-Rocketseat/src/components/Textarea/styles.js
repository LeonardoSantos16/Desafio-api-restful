import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    border-radius: 10px;
    padding: 19px 16px;
    background: #262529;
    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY};
    }
`