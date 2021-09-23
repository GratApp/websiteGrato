import React from "react";
import "./style.css";
import Card from "../Card/index";

function Main() {
  return (
    <>
      <div className="social_box">
        <a href="mailto:grato.contato@gmail.com">
          <img className="social_gmail" src="./img/gmail.png" />
        </a>
        <a href="https://www.instagram.com/grato.oficial/?hl=pt">
          <img className="social_insta" src="./img/insta.png" />
        </a>
      </div>
      {/* -------------------- Inicio -------------------- */}
      <div
        className="background"
        style={{ backgroundImage: "url(img/background.png)" }}
      >
        <div className="container" id="home">
          <tr className="txt_inicio space_inicio">
            <th>
              <h1>Grato</h1> <p>Seu diário de gratidão</p>
              <div className="txt_download">
                <a href="https://play.google.com/store/apps/details?id=grato.gratidao.app&hl=pt_BR&gl=US">
                  <img className="btn_google" src="./img/google_play.png" />
                </a>
              </div>
            </th>
          </tr>
          <div className="txt_inicio">
            <img className="phone" src="./img/phone.png" />
          </div>
        </div>
      </div>
      {/* -------------------- Sobre -------------------- */}

      <div className="container_sobre" id="about">
        <tr className="txt_sobre space_sobre">
          <th>
            Praticar a gratidão traz vários benefícios,
            <p> afinal é um certificado de reconhecimento</p> por algo que foi
            bom para você.
          </th>
        </tr>
        <tr className="vertical_line"></tr>
        <div className="txt_sobre2 box">
          <tr className="space_sobre">
            <th>
              “Agradeça sempre ! A gratidão abre as portas do coração.” - Içami
              Tiba
            </th>
          </tr>
        </div>
      </div>
      {/* -------- Sobre/Ser Grato --------  */}
      <div className="title">Ser Grato</div>
      <div className="text_ser_grato">
        Você percebe que quando você está grato as situações fluem melhor ?
        porque você não responde com raiva, ódio ou agressão, mas com amor, e
        nada é mais poderoso do que emanar sentimentos positivos. Quando
        agradecemos, descartamos os pontos negativos de nossa vida, concentramos
        nossa atenção e energia no bem. E o mais legal é que a gratidão não
        exige nada de nós, ela pode ser exercida através de coisas simples como
        agradecer pelo dia de sol ou chuva, por ter aberto a porta para você,
        para sua saúde e para sua vida.
      </div>
      <div className="title_download">
        <a href="https://play.google.com/store/apps/details?id=grato.gratidao.app&hl=pt_BR&gl=US">
          Faça o download aqui!
        </a>
      </div>
      <div className="container_line">
        <div className="horizontal_line"></div>
      </div>
      {/* -------- Sobre/Slide da Equipa --------  */}
      <div className="title">A Nossa Equipa</div>
      <Card></Card>
      {/* -------------------- Funcionalidades -------------------- */}
      <img
        className="background_func_size"
        src="./img/funcionalidades.png"
        id="func"
      />

      {/* -------- Funcionalidades --------  */}
      <div className="background_func">
        <div className="container_sobre"></div>
        <div className="vertical_line2"></div>
        <div className="container_func">
          <tr>
            <th className="text_func">
              <img className="men_img" src="./img/men.png" />
              <p>Com o grato, a prática da gratidão tornou-se</p>
              <p>mais fácil de fazer. Com apenas alguns cliques e minutos </p>
              você realiza sua gratidão.
            </th>
          </tr>
          <tr>
            <th className="text_func">
              <img className="state_img" src="./img/state.png" />
              <p>Todos os dias veja uma frase de impacto ao</p>
              <p>entrar no aplicativo ou selecione seu</p>
              estado emocional e veja a melhor frase para o seu dia.
            </th>
          </tr>
        </div>
        <div className="container_func">
          <tr>
            <th className="text_func">
              <img className="daily_img" src="./img/daily.png" />
              <p>Veja seus agradecimentos anteriores em</p> seu diário de
              gratidão.
            </th>
          </tr>
          <tr>
            <th className="text_func">
              <img className="alarm_img" src="./img/alarm.png" />
              <p>Use o Alarme para ser lembrado de</p>
              praticar a gratidão. Consistência é a chave.
            </th>
          </tr>
        </div>
      </div>
      {/* -------- Demo --------  */}
      <div className="background_demo" id="demo">
        <div className="container_demo">
          <tr className="space_inicio2 space3">
            <th>
              <div className="txt_download">
                <img className="people_img" src="./img/people.png" />
              </div>
            </th>
          </tr>
          <div className="space_phone">
            <img className="phone_gif" src="./gif/phone.gif" />
          </div>
          <tr className=" space_inicio4 ">
            <th className="txt_demo">
              <h1>Grato</h1> <p>Seu diário de gratidão</p>
              <div className="txt_download">
                <a href="https://play.google.com/store/apps/details?id=grato.gratidao.app&hl=pt_BR&gl=US">
                  <img className="btn_google" src="./img/google_play.png" />
                </a>
              </div>
            </th>
          </tr>
        </div>
      </div>
    </>
  );
}

export default Main;
