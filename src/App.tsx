import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from "react-router-dom";
import { Routes } from './router/Routes';
import { UserProvier } from './interfaces/PropsContext';

function App() {
  return (
    <UserProvier>
      <RouterProvider router={Routes}/>
    </UserProvier>
  );  
}

export default App;
