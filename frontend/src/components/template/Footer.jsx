import './Footer.css';
import React from 'react';

export default function Footer() {
  return(
    <footer className="footer">
        <span>
            Desenvolvido <i className="fa fa-heart text-danger"> por</i>
            <strong> Guilherme<span className="text-danger"> Z</span>obel</strong>
        </span>
    </footer>
  );
}