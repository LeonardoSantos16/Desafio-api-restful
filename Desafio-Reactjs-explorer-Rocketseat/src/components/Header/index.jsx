import { useState } from 'react';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Input } from '../InputHeader'
import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
export function Header({onChange, value}){
    const { signOut, user } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [name, setName] = useState(user.name);
    //const [avatar, setAvatar] = useState(user.avatar);
    const navigate = useNavigate();
    function handleSignOut(){
        navigate("/");
        signOut();
    }
    function handleProfile(){
        navigate("/profile");
    }
    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>
                <Input placeholder="Pesquisar pelo título" type="text"
                 value={value}
                 onChange={onChange}
               />
                <div>
                    <div className='text'>
                        <span>{ name }</span>
                        <Logout onClick={handleSignOut}>sair</Logout>
                    </div>
                    <img src={ avatarUrl} onClick={handleProfile} alt="foto perfil github" />  
                </div>
            </Profile>
        </Container>
    )
}