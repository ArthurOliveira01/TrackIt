import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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


const StyledLink1 = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #52B6FF;
    margin-right: 42.93333333%;
`;

const StyledLink2 = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #52B6FF;
`;

const StyledLinkToday = styled(Link)`
    
`;

const fill = 'rgb(82, 182, 255)';

const styles = {
    path: {
      stroke: fill,
    },
    trail: {
      stroke: 'transparent',
    },
    text: {
      fill: fill,
      fontSize: '16px',
    },
  };


export default function Footer(){

    // <Link to="/hoje"><Circle>Hoje</Circle></Link>

    return(
        <Bottom>
            <StyledLink1 to="/habitos">Hábitos</StyledLink1>
            <StyledLinkToday to="/hoje"><CircularProgressbarWithChildren styles={styles} value={10} text={'10%'}></CircularProgressbarWithChildren></StyledLinkToday>
            <StyledLink2 to="/historico">Histórico</StyledLink2>
        </Bottom>
    )
}