import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Context from "../../components/Context";
import Habitos from "../../components/Habitos"
import axios from "axios";


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
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    padding-bottom: 70px;
`;

const Creating = styled.div`
    width: 90.66666667%;
    height: 180px;
    background-color: #FFFFFF;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    background-color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 29px;
`;

export default function HabitsPage(){
    const {token} = useContext(Context);
    const [novo, setNovo] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() =>{
        const listar = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {Authorization: `Bearer ${token}`}
        });

        listar.then(promise => {
            setLista(promise.data)
        })
    })

    function test(){
        console.log(lista);
    }
        
//<None>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</None>
    return(
        <Container>
            <Header/>
            <Row>
                <Mine>Meus hábitos</Mine>
                <Create onClick={() => setNovo(true)} data-test="habit-create-btn">+</Create>
            </Row>
            <HabitsContainer>
                {novo && (<Creating></Creating>)}
                {lista.length === 0 && (
                <None>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</None>
                )}
                {lista.map(habit => <Habitos unidade={habit}></Habitos>)}
            </HabitsContainer>
            <Footer />
        </Container>
    )
}