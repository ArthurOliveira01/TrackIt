import { useEffect, useContext } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Context from "../../components/Context";


const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
`;

const Mine = styled.p`
    font-family: 'Lexend Deca';
    font-size: 23px;
    color: #126BA5;
    margin-top: 98px;
    margin-left: 4.533333333%;
`;

const Create = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 91px;
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    //margin-left: 40.53333333%;
    margin-left: auto;
    margin-right: 4.533333333%;
    border-color: #52B6FF;
    border-width: 0px;
    border-radius: 4.63636px;
    font-size: 27px;
    color: #FFFFFF;
    font-family: 'Lexend Deca';
`;

const HabitsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const None = styled.p`
    width: 90.13333333%;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #666666;
`;

const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    padding-bottom: 70px;
`;


export default function HabitsPage(){
    const {token} = useContext(Context);

    useEffect(() =>{

    })

    return(
        <Container>
            <Header/>
            <Row>
                <Mine>Meus hábitos</Mine>
                <Create data-test="habit-create-btn">+</Create>
            </Row>
            <HabitsContainer>
                <None>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</None>
            </HabitsContainer>
            <Footer />
        </Container>
    )
}