import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const Container = styled.div`
    width: 100%;
    height: 1000px;
    display: flex;
    flex-direction: column;
    background-color: #E5E5E5;
    padding-bottom: 70px;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
`;

const History = styled.p`
    font-family: 'Lexend Deca';
    font-size: 23px;
    color: #126BA5;
    margin-top: 98px;
    margin-left: 4.533333333%;
`;

const HistoryContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const Soon = styled.p`
    width: 90.13333333%;
    font-size: 18px;
    font-family: 'Lexend Deca';
    color: #666666;
`;


export default function HistoryPage(img){
    return(
        <Container>
            <Header
            img = {img}
            />
            <Row> 
                <History>Histórico</History>
            </Row>
            <HistoryContainer>
                <Soon>Em breve você poderá ver o histórico dos seus hábitos aqui!</Soon>
            </HistoryContainer>
            <Footer />
        </Container>
    )
}