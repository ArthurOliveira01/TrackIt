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

  function muda(event){
    setEmail(event.target.value);
  }

  function muda1(event){
    setSenha(event.target.value);
  }

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage 
          email = {email}
          setEmail = {setEmail}
          senha = {senha}
          setSenha = {setSenha}
          muda = {muda}
          muda1 = {muda1}
          />} />
          <Route path="/cadastro" element={<SetUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}