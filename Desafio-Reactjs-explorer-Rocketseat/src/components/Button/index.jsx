import { Container } from './styles'
export function Button({isNew, icon : Icon, title, ...rest}){
    return(
        <Container isNew={isNew} type="button" {...rest}>
            
            {Icon && <icon size={20}/>}
            {title}
                
        </Container>
    )
}