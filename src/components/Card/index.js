import React from "react";
import "./style.css";

function Card() {
  return (
    <div className=" container_team">
      <div className="card">
        <div className="imgBx">
          <img src="./img/Pedro.jpg" />
        </div>
        <div className="content">
          <h1>Pedro Carvalho</h1>
          <h4>Android Developer</h4>
          “Grato por poder desenvolver uma App que consiga ajudar as pessoas a
          sentirem-se melhores.”
          <div className="social_networks">
            <a href="mailto:developerpedrocarvalho@gmail.com">
              <img className="gmail" src="./img/gmail.png" />
            </a>
            <a href="https://www.linkedin.com/in/developerpedrocarvalho/">
              <img className="linkdin" src="./img/linkdin.png" />
            </a>
            <a href="https://github.com/devPedroCarvalho">
              <img className="guithub" src="./img/github.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="./img/Fred.jpg" />
        </div>
        <div className="content">
          <h1>Frederico Vieira</h1>
          <h4>Android Developer</h4>
          “Grato por ter a oportunidade de participar numa App com uma vertente
          tão única e especial.”
          <div className="social_networks">
            <a href="mailto:developer.frederico.vieira@gmail.com">
              <img className="gmail" src="./img/gmail.png" />
            </a>
            <a href="https://www.linkedin.com/in/frederico-vieira-a44631197/">
              <img className="linkdin" src="./img/linkdin.png" />
            </a>
            <a href="https://github.com/FredericoVieira11">
              <img className="guithub" src="./img/github.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="./img/Vanderley.jpg" />
        </div>
        <div className="content">
          <h1>Vanderley Quaresma</h1>
          <h4>Backend Developer</h4>
          “Grato por colaborar na criação de uma App com valores, quer a nível
          pessoal como de bem-estar”
          <div className="social_networks">
            <a href="mailto:vanderleyquaresma@live.com.pt">
              <img className="gmail" src="./img/gmail.png" />
            </a>
            <a href="https://www.linkedin.com/in/vanderley-quaresma/">
              <img className="linkdin" src="./img/linkdin.png" />
            </a>
            <a href="https://github.com/vanderley94">
              <img className="guithub" src="./img/github.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img src="./img/Ricardo.jpg" />
        </div>
        <div className="content">
          <h1>Ricardo Miranda</h1>
          <h4>Designer</h4>
          “Grato por poder realizar o design desta App, podendo fazer aquilo que
          para mim é mais prazeroso e gratificante, ser designer.”
          <div className="social_networks">
            <a href="mailto:ricardomirannda@gmail.com">
              <img className="gmail" src="./img/gmail.png" />
            </a>
            <a href="https://www.linkedin.com/in/ricardomirannda/">
              <img className="linkdin" src="./img/linkdin.png" />
            </a>
            <a href="https://github.com/ricardomirannda">
              <img className="guithub" src="./img/github.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
