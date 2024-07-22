import styled from 'styled-components'

export const Container = styled.div`
    display: flex;

    
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_BUTTON};
    color: ${({ theme }) => theme.COLORS.GRAY};

     border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY}` : "none"};
    border-radius: 10px;
    width: 17%;
    height: 56px;
    


  > button { 
    border: none;
    background: none;
    padding: 16px;

  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
    
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};

  }

  > input {
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    width: 100%;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY};
    }
  }
`


