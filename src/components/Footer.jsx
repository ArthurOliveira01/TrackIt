import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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

    return(
        <Bottom>
            <StyledLink1 to="/habitos">Hábitos</StyledLink1>
            <StyledLinkToday to="/hoje"><CircularProgressbarWithChildren
            background backgroundPadding={6} styles={buildStyles({
            backgroundColor: "#52B6FF",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"})} 
            value={50} 
            text={'Hoje'}>
            </CircularProgressbarWithChildren></StyledLinkToday>
            <StyledLink2 to="/historico">Histórico</StyledLink2>
        </Bottom>
    )
}