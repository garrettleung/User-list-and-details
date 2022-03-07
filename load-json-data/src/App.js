
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserPage from "./pages/Users";
import data from "./userdata";
import './App.css';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<UserList/>} />
      <Route path='/0' element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;