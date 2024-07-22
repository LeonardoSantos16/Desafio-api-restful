import { Container } from "./styles";
import { GoArrowLeft } from "react-icons/go";

export function BackButton({...rest}){

    return(
        <Container  {...rest}>
           
            <GoArrowLeft/>
            voltar
        </Container>
        
    )
}