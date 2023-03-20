import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Context from "./Context";
import { useContext } from "react";


const Bottom = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const StyledLink1 = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #52B6FF;
    margin-right: 10.13333333%;
`;

const StyledLink2 = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #52B6FF;
    margin-left: 10.13333333%;
`;

const StyledLinkToday = styled(Link)`
    font-family: 'Lexend Deca';
    margin-bottom: 35px;
    width: 91px;
    height: 91px;
`;


export default function Footer(){

    // <Link to="/hoje"><Circle>Hoje</Circle></Link>
    const {porcentagem} = useContext(Context);
    return(
        <Bottom data-test="menu">
            <StyledLink1 data-test="habit-link" to="/habitos">Hábitos</StyledLink1>
            <StyledLinkToday data-test="today-link" to="/hoje"><CircularProgressbarWithChildren
            background backgroundPadding={6} styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"})} 
            value={porcentagem} 
            text={'Hoje'}>
            </CircularProgressbarWithChildren></StyledLinkToday>
            <StyledLink2 data-test="history-link" to="/historico">Histórico</StyledLink2>
        </Bottom>
    )
}