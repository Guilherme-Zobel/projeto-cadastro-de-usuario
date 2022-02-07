import './Menu.css';
import React from 'react';

export default function Menu() {
  return(
    <aside className="menu-area">
        <nav className="menu">
          {/* Lembrar de refatorar! */}
          <a href="/">
            <i className="fa fa-home"></i> Início
          </a>
          <a href="/users">
            <i className="fa fa-users"></i> Usuários
          </a>     
        </nav>
    </aside>
  );
}