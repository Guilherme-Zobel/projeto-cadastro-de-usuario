import React from 'react';
import Main from '../template/Main';

export default function Home() {
  return(
    <Main icon="home" title="Início"
      subtitle="Segundo projeto do capítulo de React.">
        <div className="display-4">Bem Vindo!</div>
        <p className="nb-0">Sistema para exemplificar a construção de um cadastro desenvolvido em React!</p>
    </Main>
  );
}