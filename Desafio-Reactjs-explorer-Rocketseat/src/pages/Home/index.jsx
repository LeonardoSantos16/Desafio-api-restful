import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi'
import { Container, NewFilm } from './styles'
import { Section } from '../../components/Section'
import { Tags } from '../../components/Tags'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
export function Home(){
 //   const [tags, setTags] = useState([]);
    const [notes, setNote] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
/*
    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
          } 
          fetchTags();
    }, []);
*/
    function handleDetails(id){
        navigate(`/details/${id}`)
    }
useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes`);
      setNote(response.data);
    }
    fetchNotes();
  }, []);
useEffect(() => {
    async function fetchNotes(){
        console.log("FET")
        const response = await api.get(`/notes?title=${search}`);
        setNote(response.data);
      }
      fetchNotes();
    }, [search]);


    return(
        <Container>
            <Header value={search} onChange={(e) => setSearch(e.target.value)}/>
            <main>
                <header>
                    <h1>Meus filmes</h1>
                    <NewFilm to="/create">
                        <FiPlus/>
                        Adicionar filme
                    </NewFilm>
                </header>
                <article>
              
                    {
                        notes.map(note => (
                            <Section
                            key={String(note.id)}
                            data={note} onClick={() => handleDetails(note.id)}/>
                        ))
                    }                    
                
                    
                </article>
            </main>   
        </Container>
    )
}