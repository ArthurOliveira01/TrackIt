import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { IoMdCheckmark } from 'react-icons/io';
import { Icon } from 'react-icons';
import { useEffect, useState } from "react";
import axios from "axios";
import Context from "../../components/Context";
import { useContext } from "react";

const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    padding-bottom: 70px;
`;

const Day = styled.p`
    font-family: 'Lexend Deca';
    font-size: 23px;
    color: #126BA5;
    margin-top: 98px;
    margin-left: 4.533333333%;
    line-height: 28.72px;
`;

const Specification = styled.p`
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #8FC549;
    margin-left: 4.533333333%;
    line-height: 22.47px;
`;

const HabitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
`;

const Habits = styled.div`
    width: 90.66666667%;
    height: 94px;
    background-color: #FFFFFF;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4.411764706%;
`;

const HabitName = styled.p`
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
`;

const Streak = styled.p`
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
`;

const CheckStreak = styled.span`
    color: #8FC549;
`;

const Record = styled.p`
    font-family: Lexend Deca;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #666666;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 4.411764706%;
    margin-left: auto;
`;

const Check = styled.button`
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    border: 0px;
    border-radius: 5px;
`;

const Check1 = styled.button`
    width: 69px;
    height: 69px;
    background-color: ${props => props.color1};
    border: 0px;
    border-radius: 5px;
`;

const Mark = styled(IoMdCheckmark)`
    color: #FFFFFF;
    font-weight: 700;
`;

export default function TodayPage(){
    const {token, today, setToday, selec, setSelec, porcentagem, setPorcentagem} = useContext(Context);
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dataAtual = new Date();
    const weekDay = dataAtual.getDay();
    const numberMonth = dataAtual.getDate();
    const Month = dataAtual.getMonth();
    let counter = 1;
    setPorcentagem(0);
     useEffect(() =>{
        const listar = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {Authorization: `Bearer ${token}`}
        });

        listar.then(promise => {
            setToday(promise.data)
        })
        console.log(`selec: ${selec.length}`);
        console.log(`today: ${selec.length/today.length}`);
        setPorcentagem((selec.length/today.length) * 100)
    })

    function select(number){
        if(!selec.includes(number)){
            let aux = selec ;
            aux.push(number);
            setSelec(aux);
        } else{
            const index = selec.indexOf(number);
            const aux = [...selec];
            aux.splice(index, 1);
            console.log('teste');
            console.log(aux);
            setSelec(aux);
        }
    }

    function enviar(id, done){
        const final = {}
        if(done === false){
            console.log(`${id} é falso`)
            const post = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, final,
            {headers: {Authorization: `Bearer ${token}`}});
            post.then(promise    =>{
            console.log(promise);
            select(id);
        }  
        )
        post.catch()
        } else{
            const post = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, final,
            {headers: {Authorization: `Bearer ${token}`}});
            post.then(promise =>{
            select(id);
            console.log(promise);
            console.log(`today: ${selec}`);
            console.log(`today: ${today}`);
        }  
        )
        post.catch()
        }
    }

    return(
        <Container>
            <Header
            />
            <Day data-test="today">{week[weekDay]}, {numberMonth}/{Month + 1}</Day>
            <Specification>{porcentagem}% dos hábitos concluídos</Specification>
            <HabitsContainer>
                {today.map((cada) => {
                    let color1;
                    if(selec.includes(cada.id) || cada.done === true){
                        if(!selec.includes(cada.id)){
                            let aux = selec ;
                            aux.push(cada.id);
                            setSelec(aux);
                        }
                        counter ++;
                        color1 = "#8FC549";
                    } else{
                        color1 = "#E7E7E7";
                        counter --;
                    }
                    return(
                    <Habits data-test="today-habit-container">
                        <Left>
                            <HabitName data-test="today-habit-name">{cada.name}</HabitName>
                                <Streak data-test="today-habit-sequence">Sequência atual: <CheckStreak>{cada.currentSequence}</CheckStreak></Streak>
                                <Record data-test="today-habit-record">Seu recorde: <CheckStreak>{cada.highestSequence}</CheckStreak></Record>
                        </Left>
                        <Right>
                            <Check1 data-test="today-habit-check-btn" onClick={() => enviar(cada.id, cada.done)}  color1={color1} ><Mark size={35} /></Check1>
                        </Right>
                    </Habits>
                    )
                })}
            </HabitsContainer>
            <Footer
            porcentagem = {porcentagem}
            />
        </Container>
    )
}