import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const Logo = styled.img`
    width:180px;
    height: 178.38px;
    margin-top: 10.19490255%;
`;

const Email = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 32.62px;
    font-family: 'Lexend Deca';
    color: #666666;
    font-size: 20px;
    &::placeholder{
    font-family: 'Lexend Deca';
    color: gray;
    padding-left: 11px;
    }
`;

const Senha = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 6px;
    font-family: 'Lexend Deca';
    color: #666666;
    font-size: 20px;
    &::placeholder{
    font-family: 'Lexend Deca';
    color: gray;
    padding-left: 11px;
    }
`;

const Entrar = styled.button`
    width: 308px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 6px;
    font-family: 'Lexend Deca';
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 21px;
    &:hover{
        cursor:pointer;
    }
`;

const Cadastro = styled.p`
    margin-top: 25px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 14px;
    text-decoration: underline;
`;

export default function LoginPage({email, setEmail, senha, setSenha}){
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



//    function click(){
//        console.log(email);
//        console.log(senha);
//    }

    function muda(event){
        setEmail(event.target.value);
    }
    
    function muda1(event){
        setSenha(event.target.value);
    }

    function test(){
        setLoading(true);
        console.log(email);
        console.log(senha);
    }

    function login(event){
        event.preventDefault();
        const send = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email: email, password: senha});
        console.log(send);
        send.then(() => navigate("/habitos"));
        send.catch(send.response);
    }

    

    //<Link to="/habitos"><Entrar onClick={click()} datatest="login-btn">Entrar</Entrar></Link>

    return(
        <PageContainer>
            <Logo onClick={test} src={"https://i.ibb.co/DKjLYX1/logo.png"} />
            <Email required disabled={loading} data-test="email-input" type={"email"} placeholder="email" onChange={muda} />
            <Senha required disabled={loading} data-test="password-input" type={'password'} placeholder="senha" onChange={muda1} />
            <Link to="/habitos"><Entrar onClick={login} datatest="login-btn">Entrar</Entrar></Link>
            <Link data-test="signup-link" to="/cadastro"><Cadastro>Não tem uma conta? Cadastre-se!</Cadastro></Link>
        </PageContainer>
    )
}