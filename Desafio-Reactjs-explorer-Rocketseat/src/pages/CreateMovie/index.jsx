import { Header } from "../../components/Header"
import { Container, Form, Nav } from "./styles"
import { Input } from "../../components/InputHeader";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Button } from "../../components/Button";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { api } from "../../services/api";
import { BackButton } from "../../components/BackButton";
export function CreateMovie(){
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");
    const Navigate = useNavigate();

    async function handleCreateMovie(){
        const nota = {
            title,
            description,
            tags,
            rating
        }
        api.post("/notes", nota);
        alert("Nota criada com sucesso");
        handleBack();
    }

    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted)) //filtrando uma lista nova sem o link passado
      }

      function handleAddTag(){
        setTags(prevState => [...prevState, newTag]); // spread operator
      }

      function handleBack(){
        Navigate(-1);
      }

    return(
    <Container>
        <Header/>
        <main>
            <BackButton onClick={handleBack}/>
            <Nav>
                
                <div className='back'>
                    
                </div>
                <h1>Novo filme</h1>
            </Nav>
            <Form>
                <div className="inputs">
                    <Input placeholder="Título" type="text"
                    onChange={e => setTitle(e.target.value)}
                    />
                    <Input placeholder="Sua nota (de 0 a 5)" type="text"
                    onChange={e => setRating(e.target.value)}
                    />
                </div>
                <Textarea placeholder="Observações"
                onChange={e => setDescription(e.target.value)}
                />
            </Form>
            <h2>Marcadores</h2>
            <div className="marcadores">
                {
                    tags.map((tag, index) => (
                        <NoteItem 
                            key={String(index)}
                            value={tag}
                            onClick={() => { handleRemoveTag(tag) }}
                        />
                    ))
                    
                }
                <NoteItem 
                    isNew placeholder="Nova tag"  
                    onChange={e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                />
                
            </div>
            <footer>
                <Button isNew title="Excluir filme" onClick={handleBack}/>
                <Button title="Salvar alterações" onClick={handleCreateMovie}/>
            </footer>
        </main>
    </Container>
    )
}



