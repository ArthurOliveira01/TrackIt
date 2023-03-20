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
    height: 1000px;
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
    align-items: left;
    //justify-content: left;
    background-color: #FFFFFF;
    margin-top: 10px;
    margin-bottom: 29px;
`;

const Title = styled.input`
    width: 89.11764706%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-top: 18px;
    margin-left: 5.588235294%;
    font-family: 'Lexend Deca';
    color: #666666;
    font-size: 20px;
    &::placeholder{
    font-family: 'Lexend Deca';
    color: gray;
    padding-left: 11px;
    }
`;

const Semana = styled.div`
    display: flex;
    margin-top: 8px;
    margin-left: 5.588235294%;
`;

const Botao = styled.button`
    border: 1px solid #D4D4D4;
    border-color: #D4D4D4D4;
    border-radius: 5px;
    background-color: ${props => props.color}; 
    margin-left: 4.411764706%;
    font-family: 'Lexend Deca';
    color: ${props => props.font};
`;

const Cancelar = styled.button`
    height: 35px;
    width: 84px;
    margin-top: 29px;
    margin-left: 38.23529412%;
    border-radius: 4.636363506317139px;
    border: 0px;
    background-color: #FFFFFF;
    color: #52B6FF;
`;

const Salvar = styled.button`
    height: 35px;
    width: 84px;
    margin-top: 29px;
    border-radius: 4.636363506317139px;
    border: 0px;
    background-color: #52B6FF;
    color: #FFFFFF;
`;

const Baixo = styled.div`
    display: flex;
`;


export default function HabitsPage(){
    const {token} = useContext(Context);
    const [novo, setNovo] = useState(false);
    const [lista, setLista] = useState([]);
    const [selected, setSelected] = useState([]);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [titulo, setTitulo] = useState('')

    useEffect(() =>{
        const listar = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {Authorization: `Bearer ${token}`}
        });

        listar.then(promise => {
            setLista(promise.data)
        })
    })


    function select(number){
        if(!selected.includes(number)){
            let aux = selected;
            aux.push(number);
            setSelected(aux);
        } else{

        }
        console.log(selected);
    }

    function send(event){
        event.preventDefault();
        if(titulo !== '' && selected !== []){
            const final = {
                name: titulo,
                days: selected
            }
            const post = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            final,
            headers: {Authorization: `Bearer ${token}`}
        });
            post.then(promise => {
                setTitulo('');
                setSelected([]);
                setNovo(false);
            })
        }
        
    }

    function set(){
        console.log(titulo);
        console.log(selected);
    }
        
//<None>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</None>
    return(
        <Container>
            <Header/>
            <Row>
                <Mine onClick={() => set()}>Meus hábitos</Mine>
                <Create onClick={() => setNovo(true)} data-test="habit-create-btn">+</Create>
            </Row>
            <HabitsContainer>
                {novo && (<Creating data-test="habit-create-container">
                    <Title data-test="habit-name-input" placeholder="nome do hábito" onChange={e => setTitulo(e.target.value)}></Title>
                    <Semana>
                        {dias.map((index, number) => {
                            let color;
                            let font;
                            if(selected.includes(number)){
                                color = "#D4D4D4D4";
                                font = "#FFFFFF";
                            } else{
                                color = "#FFFFFF";
                                font = "#D4D4D4D4";
                            }
                    return(    
                        <Botao key={number} onClick={() => select(number)} data-test="habit-day" font={font} color={color}>{index}</Botao>
                    )
                })}
                    </Semana>
                    <Baixo>
                        <Cancelar data-test="habit-create-cancel-btn" onClick={() => setNovo(false)}>Cancelar</Cancelar>
                        <Salvar data-test="habit-save-cancel-btn" onClick={send}>Salvar</Salvar>
                    </Baixo>
                </Creating>)}
                {lista.length === 0 && (
                <None>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</None>
                )}
                {lista.map(habit => <Habitos unidade={habit}></Habitos>)}
            </HabitsContainer>
            <Footer />
        </Container>
    )
}