import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import SetUpPage from "./pages/SetUpPage/SetUpPage";

export default function App(){
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SetUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}