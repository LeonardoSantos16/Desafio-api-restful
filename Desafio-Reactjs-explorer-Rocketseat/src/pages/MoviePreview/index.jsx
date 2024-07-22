import { Header } from '../../components/Header'
import { Container } from './styles';
import { CiClock2 } from "react-icons/ci";
import { GoArrowLeft } from "react-icons/go";
import { Tags } from '../../components/Tags';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { StarComponent } from '../../components/stars';
import { useAuth } from '../../hooks/auth';
import { BackButton } from '../../components/BackButton';
export function MoviePreview(){
    const { user } = useAuth();
    const params = useParams();
    const [data, setData] = useState(null);
    const Navigate = useNavigate();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    function handleBack(){
        Navigate(-1);
      }

    useEffect(() => {
        async function fetchNote(){
          const response = await api.get(`/notes/${params.id}`)
          setData(response.data);
          
        }
    
        fetchNote();
      }, [])
    return(
    <Container>
        <Header/>
        {data &&
        <main>
            <header>
                <BackButton onClick={handleBack}/>
                
                <div className='title'>
                    <h1>{data.title}</h1>
                     <StarComponent rating={data.rating}/>
                </div>
                <div className='subTitle'>
                    <img src={avatarUrl} alt="foto perfil github" />
                    <p>Por { data.movieUser.map((user) => user.name)}</p>
                    <CiClock2 style={{color: '#FF859B'}}
                    />
                    <p>{data.created_at}</p>
                </div>
            </header>
            <div className="tagFilm">
             
                {
                    data.movieTags.map(tag => <Tags key={tag.id} title={tag.name} />)
                }
                
            </div>
            <p>
                {data.description}
            </p>
        </main>
}
    </Container>
    )
}