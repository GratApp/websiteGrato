import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="background_footer">
        <footer>
          © 2021 GratoApp - All design and web site developed by Gonçalo Rocha
          <a href="mailto:rochacardoso1@hotmail.com">
            <img className="gmail_footer" src="./img/gmail.png" />
          </a>
          <a href="./doc/politica_privacidade.pdf">
            Política de Privacidade - Grato
          </a>
        </footer>
      </div>
    </>
  );
}

export default Footer;
