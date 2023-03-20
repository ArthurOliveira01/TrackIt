import styled from "styled-components";
import Context from "./Context";
import { useContext } from "react";
import trash from "../img/trash.svg"
import axios from "axios";


const Exists = styled.div`
    width: 90.66666667%;
    height: 91px;
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    background-color: #FFFFFF;
    margin-bottom: 10px;
    border-radius: 5px;
`;

const HabitName = styled.p`
    margin-left: 4.411764706%;
    margin-top: 13px;
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
`;

const Semana = styled.div`
    display: flex;
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

const Trash = styled.img`
    width: 13px;
    height: 15px;
    margin-right: 10px;
    margin-left: auto;
    margin-top: -40px; 
    margin-bottom: auto;
`

export default function Habitos({unidade}){
    const {token} = useContext(Context);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function deleteHabit(){
       if(window.confirm('Você está prestes a excluir esse hábito, deseja continuar com essa ação')){
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${unidade.id}`, {
            headers: {Authorization: `Bearer ${token}`}
        })
       }
    }

    return(
        <Exists data-test="habit-container">
            <HabitName onClick={() => console.log(token)} data-test="habit-name">{unidade.name}</HabitName>
            <Semana>
                {dias?.map((index, number) => {
                    let color;
                    let font;
                    if(unidade.days.includes(number)){
                        color = "#D4D4D4D4";
                        font = "#FFFFFF";
                    } else{
                        color = "#FFFFFF";
                        font = "#D4D4D4D4";
                    }
                    return(    
                        <Botao data-test="habit-day" font={font} color={color}>{index}</Botao>
                    )
                })}
            </Semana>
            <Trash onClick={deleteHabit} data-test="habit-delete-btn" src={trash} />
        </Exists>
    )
}

