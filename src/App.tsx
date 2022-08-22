import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"

function App() {
  return (
    <Main />
  );
}

export default App;
