import './Main.css';
import React from 'react';
import Header from './Header'; 

export default function Main() {
  return(
    <>
      <Header>
      <main className="content">
        Conteúdo
      </main>
      </Header>
    </>
  );
}