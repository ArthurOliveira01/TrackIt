import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SetUpPage from "./pages/SetUpPage/SetUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import Context from "./components/Context";

export default function App(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [img, setImg] = useState("");
  const [nome, setNome] = useState("");
  const [token, setToken] = useState("");

 
  return(
    <>
      <Context.Provider value={{img, setImg, token, setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage
            email = {email}
            setEmail = {setEmail}
            senha = {senha}
            setSenha = {setSenha}
            img = {img}
            setImg = {setImg}
            token = {token}
            setToken = {setToken}
            />} />
            <Route path="/cadastro" element={<SetUpPage
            setEmail={setEmail}
            setSenha = {setSenha}
            setImg = {setImg}
            setNome = {setNome}
            email = {email}
            senha = {senha}
            img = {img}
            nome = {nome}
            />} />
            <Route path="/habitos" element={<HabitsPage
            />} />
            <Route path="/hoje" element={<TodayPage
            />} />
            <Route path="/historico" element={<HistoryPage
            />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}