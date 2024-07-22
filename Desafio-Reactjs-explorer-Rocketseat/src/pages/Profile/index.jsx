import { FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { Container, Picture, Form } from "./styles";
import { GoArrowLeft } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { BackButton } from '../../components/BackButton';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Profile(){
    const { user, profileUpdate } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const Navigate = useNavigate();
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(user.avatar); // url da imagem para o banco de dados
    const [avatarFile, setAvatarFile] = useState(null); //imagem


    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            passwordOld: passwordOld,
          }
          const userUpdated = Object.assign(user, updated)
          await profileUpdate({ user: userUpdated, avatar: avatarFile });
          Navigate("/");
        }
        
      function handleChangeAvatar(event) {
        const file = event.target.files[0];
        
        setAvatarFile(file);
    
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
      }
      function handleBack(){
        Navigate(-1);
      }

    return(
        <Container>

            <header>
                <BackButton onClick={handleBack}/>
            </header>
            <Form>
            <Picture>
                <img
                    src= { avatarUrl }
                    alt="Foto do usuário"
                />
                <label htmlFor="avatar">
                    <FiCamera />

                    <input
                    id="avatar"
                    type="file"
                    onChange={ handleChangeAvatar }
                    />
                </label>
            </Picture>
            <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value= { name }
                onChange={e => setName(e.target.value)}
            />
            <Input
                placeholder="email"
                type="text"
                icon={FiMail}
                value= { email }
                onChange={e => setEmail(e.target.value)}
            />
            <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
            />
            <Input
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
            />
            <Button
                title="Salvar"
                onClick={ handleUpdate }
            />
            </Form>
        </Container>
    )
}