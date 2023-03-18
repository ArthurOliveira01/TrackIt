import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';



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

const Nome = styled.input`
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

const Pic = styled.input`
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

const Cadastrar = styled.button`
    width: 308px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 6px;
    font-family: 'Lexend Deca';
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 21px;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
`;

const Login = styled.p`
    margin-top: 25px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 14px;
    text-decoration: underline;
`;


export default function SetUpPage({setEmail, setSenha, setImg, setNome, nome, email, senha, img}){
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    function muda(event){
        setEmail(event.target.value);
    }

    function muda1(event){
        setSenha(event.target.value);
    }

    function muda2(event){
        setNome(event.target.value);
    }

    function muda3(event){
        setImg(event.target.value);
    }

    function clique(){
        console.log(email);
        console.log(senha);
        console.log(img);
        console.log(nome);
    }

    function signup(event){
        event.preventDefault();
        if(loader == true){
            setLoader(false);
        } else{
            setLoader(true);
        }
        const send = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {email: email, password: senha, image: img, name: nome});
        console.log(send);
        send.then(() => navigate("/"));
        send.catch(error);
    }

    function error(){
        alert('Não foi possível cadastrar, tente novamente!');
        setLoader(false);
    }


    return(
        <PageContainer>
            <Logo src={"https://i.ibb.co/DKjLYX1/logo.png"} />
            <Email required disabled={loader} type={'emai'} data-test="email-input" placeholder="email" onChange={muda} />
            <Senha required disabled={loader} type={'password'} data-test="password-input" placeholder="senha" onChange={muda1} />
            <Nome required disabled={loader} type={"text"} data-test="user-name-input" placeholder="nome" onChange={muda2} />
            <Pic required disabled={loader} type={"url"} data-test="user-image-input" placeholder="foto" onChange={muda3} />
            <Link data-test="signup-btn" disabled={loader} to="/"><Cadastrar onClick={signup} data-test="signup-btn">{loader && (
                <ThreeDots width={40} height={40} color="#FFFFFF" />
            ) || (
                'Cadastrar'
            )}</Cadastrar></Link>
            <Link to="/"><Login data-test="login-link">Já tem uma conta? Faça login!</Login></Link>
        </PageContainer>
    )
}