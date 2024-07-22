import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    >header{
        width: 100%;
        padding-left: 124px;
        background-color: rgb(255, 133, 155, 5%);
        height: 144px;
        display: flex;
        align-items: center;
        >a{
          display: flex;
          align-items: center;
          gap: 2px;
          color: ${({ theme }) => theme.COLORS.PINK};
          text-decoration: none;
        }
    }
`
export const Form = styled.form`
   display: flex;
   flex-direction: column;
    align-items: center;
    
  > div:nth-child(2) {
    margin-top: 157px;
  }

  > div:nth-child(4) {
    margin-top: 24px;
  }
`
export const Picture = styled.div`
    position: relative;
    margin: -93px;
    width: 186px;
    height: 186px;
    >img{
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }
    >label{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        height: 48px;
        width: 48px;
        border-radius: 50%;
        display: flex;
         align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        bottom: 7px;
        right: 7px;
            
    
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.TAGS_GRAY};
    }
    }

    
`