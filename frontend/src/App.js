

import './App.css';
import React from 'react';
import Router from './main/Routes';
import Logo from "./components/template/Logo";
import Menu from "./components/template/Menu";
import Footer from "./components/template/Footer";


export default function App()  {
  return (
  <>
    <div className="app">
      <Logo />
      <Menu />
      <Router />
      <Footer />
    </div>
  </>
    );
  }