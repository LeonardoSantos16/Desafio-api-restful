import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
//import { json } from "react-router-dom";

export const myContext = createContext({});

function AuthenticatorProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try{
             // Chama a API para autenticar usuário
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            // Armazena usuário e token no localStorage
            localStorage.setItem("@desafiorocketmovies:user",JSON.stringify(user));
            localStorage.setItem("@desafiorocketmovies:token", token);
             // Configura o cabeçalho de autorização para futuras requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
             // Atualiza o estado com usuário e token
             setData({ user, token });
        }catch (error){
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    async function signOut(){
        localStorage.removeItem('@desafiorocketmovies:user');
        localStorage.removeItem('@desafiorocketmovies:token')
        setData({});
    }

    async function profileUpdate({ user, avatar }){
        try{
        
            if(avatar){
                
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatar);
                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }   
            await api.put("/users", user);
            
            localStorage.setItem('@desafiorocketmovies:user', JSON.stringify(user));
            
            setData({ user, token: data.token });
            alert("Perfil atualizado");
        }catch (error) {
            // Trata erros de resposta da API
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    useEffect(() => {
        // Obtém usuário e token do localStorage
        const token = localStorage.getItem("@desafiorocketmovies:token");
        const user = localStorage.getItem("@desafiorocketmovies:user");

        if (token && user) {
            // Configura o cabeçalho de autorização para futuras requisições
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            // Atualiza o estado com usuário autenticado
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <myContext.Provider value={{ signIn, signOut, profileUpdate, user: data.user}}>
            {children} { }
        </myContext.Provider>
    );
}

 function useAuth(){
    const context = useContext(myContext);
    return context;
 }

 export { AuthenticatorProvider, useAuth };