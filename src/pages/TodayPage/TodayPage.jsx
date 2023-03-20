import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { IoMdCheckmark } from 'react-icons/io';
import { Icon } from 'react-icons';

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
    background-color: #E7E7E7;
    border: 0px;
    border-radius: 5px;
`;

const Mark = styled(IoMdCheckmark)`
    color: #FFFFFF;
    font-weight: 700;
`;

export default function TodayPage(){


    return(
        <Container>
            <Header
            />
            <Day>Segunda, 17/05</Day>
            <Specification>50% dos hábitos concluídos</Specification>
            <HabitsContainer>
                <Habits>
                    <Left>
                        <HabitName>Ir à academia</HabitName>
                        <Streak>Sequência atual: <CheckStreak>4 dias</CheckStreak></Streak>
                        <Record>Seu recorde: <CheckStreak>4 dias</CheckStreak></Record>
                    </Left>
                    <Right>
                        <Check><Mark size={35} /></Check>
                    </Right>
                </Habits>
                <Habits>
                    <Left>
                        <HabitName>Programar por 2 horas</HabitName>
                        <Streak>Sequência atual: 3 dias</Streak>
                        <Record>Seu recorde: 10 dias</Record>
                    </Left>
                    <Right>
                        <Check1><Mark size={35} /></Check1>
                    </Right>
                </Habits>
            </HabitsContainer>
            <Footer />
        </Container>
    )
}