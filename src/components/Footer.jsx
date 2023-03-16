import styled from "styled-components";
import { Link } from "react-router-dom";


const Bottom = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    margin-top: 597px;
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Text1 = styled.p`
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #52B6FF;
    margin-right: 42.93333333%;
`;

const Text2 = styled.p`
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #52B6FF;
`;

const Circle = styled.button`
    position: absolute;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;;
    margin-bottom: 34px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 0px;
    color: #FFFFFF;
    font-family: 'Lexend Deca';
    font-size: 18px;
`;

export default function Footer(){
    return(
        <Bottom>
            <Link to="/habitos"><Text1>Hábitos</Text1></Link>
            <Link to="/hoje"><Circle>Hoje</Circle></Link>
            <Link to="/historico"><Text2>Histórico</Text2></Link>
        </Bottom>
    )
}