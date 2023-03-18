import styled from "styled-components";

const Topo = styled.div `
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    flex-direction: row;
    position: fixed;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

const Name = styled.p`
    font-family: 'Playball';
    font-weight: 400;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    font-size: 40px;
    color: #FFFFFF;
    margin-top: 10px;
    margin-left: 4.8%;
`;

const Profile = styled.img`
    width: 51px;
    height:51px;
    margin-top: 9px;
    margin-left: auto;
    margin-right: 4.8%;
    border-radius: 98.5px;
`;


export default function Header(){
    const link = "https://mir-s3-cdn-cf.behance.net/projects/404/fa1a1e115357173.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png";
    return(
        <Topo data-test="header">
            <Name>Teste</Name>
            <Profile src={link} />
        </Topo>
    )
}