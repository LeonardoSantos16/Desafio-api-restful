import { Film, Container } from "./styles"
import { Tags } from "../Tags"
import { StarComponent } from "../stars"
export function Section({ data, ...rest }){
    return(
        <Container {...rest}>
            <Film>
                <h2>{ data.title }</h2>
                <StarComponent rating={data.rating}/>
                
            </Film>
            <p>{ data.description }</p>
            {
                data.tags &&
                <main>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </main>
            }
        </Container>
    )
}