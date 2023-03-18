import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SetUpPage from "./pages/SetUpPage/SetUpPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import TodayPage from "./pages/TodayPage/TodayPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";

export default function App(){

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [img, setImg] = useState("");
  const [nome, setNome] = useState("");

 
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage 
          email = {email}
          setEmail = {setEmail}
          senha = {senha}
          setSenha = {setSenha}
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
          img = {img}
          />} />
          <Route path="/hoje" element={<TodayPage
          img = {img}
          />} />
          <Route path="/historico" element={<HistoryPage
          img = {img}
          />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}