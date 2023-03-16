import { Link } from "react-router-dom";
import styled from "styled-components";


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
`;

const Login = styled.p`
    margin-top: 25px;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-size: 14px;
    text-decoration: underline;
`;


export default function SetUpPage(){
    return(
        <PageContainer>
            <Logo src={"https://i.ibb.co/DKjLYX1/logo.png"} />
            <Email placeholder="email" />
            <Senha placeholder="senha" />
            <Nome placeholder="nome" />
            <Pic placeholder="foto" />
            <Link to="/"><Cadastrar>Cadastrar</Cadastrar></Link>
            <Link to="/"><Login>Já tem uma conta? Faça login!</Login></Link>
        </PageContainer>
    )
}