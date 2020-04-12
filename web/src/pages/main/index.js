import React from 'react'
import './styles.css'

import Header from '../../components/header'
import Navigator from '../../components/Navigator'
import Footer from '../../components/footer'

import hearts from '../../assets/img/freestocks-Y9mWkERHYCU-unsplash.jpg'

import strawberry from '../../assets/img/strawberry-4-128.png'
import commode from '../../assets/img/commode-128.png'
import money from '../../assets/img/money-128.png'
import plus from '../../assets/img/plus-128.png'
import categorize from '../../assets/img/categorize-128.png'

import email from '../../assets/img/icons/baseline_email_white_48dp.png'
import call from '../../assets/img/icons/baseline_call_white_48dp.png'
import room from '../../assets/img/icons/baseline_room_white_48dp.png'

export default function Main () {
  return (
    <>
      <Header />
      <Navigator />

      <section id="painel">
        <div className="wrapper ms-size">
          <div className="floating-content pa">
            <h1>Você pode fazer a diferença</h1>
            <p>Doar & Amar é uma plataforma de doações que aproxima doadores e recebedores.</p>
          </div>

          <div className="main-banner pa"/>

          <div className="lower-banner pa">
            <img src={hearts} alt="hearts" />

            <div className="banner-content">
              <strong>Pode nos ajudar?</strong>
              <button>Quero participar</button>
            </div>

            <div className="block block-one" />
            <div className="block block-two" />
          </div>
        </div>
      </section>

      <section id="doar">
        <div className="wrapper">
          <h1>Faça sua doação!</h1>
          <h2>Há maior felicidade em dar do que em receber</h2>
          <h4>Atos 20:35</h4>

          <ul>
            <li>
              <img src={strawberry} alt="strawberry" />
              <strong>Alimentos</strong>
            </li>

            <li>
              <img src={commode} alt="commode" />
              <strong>Móveis</strong>
            </li>

            <li>
              <img src={money} alt="money" />
              <strong>Dinheiro</strong>
            </li>

            <li>
              <img src={plus} alt="plus" />
              <strong>Medicamentos</strong>
            </li>

            <li>
              <img src={categorize} alt="categorize" />
              <strong>Outros</strong>
            </li>
          </ul>

          <button id="info-doar">Saiba Mais</button>
        </div>
      </section>

      <section id="fale-conosco">
        <div className="wrapper">
          <p className="header-legend">Vamos conversar?</p>
          <h1 className="header-text">Fale Conosco</h1>

          <div className="info">
            <div className="contact-info">
              <ul>
                <li>
                  <img src={email} alt="email" />
                  <strong>doareamar@dominio.com</strong>
                </li>
                <li>
                  <img src={call} alt="call" />
                  <strong>(11) 91234-5687</strong>
                </li>
                <li>
                  <img src={room} alt="room" />
                  <strong>R. João Batista Soares, 440 - Centro, Barueri - SP, 06401-135</strong>
                </li>
              </ul>
            </div>

            <form>
              <legend>Mande sua mensagem!</legend>

              <div className="inputs">
                <input className="input" type="text" placeholder="Seu nome" />
                <input className="input" type="email" placeholder="Seu e-mail" />
                <input className="input" placeholder="Seu assunto" />
              </div>

              <textarea className="input" placeholder="Sua mensagem" />

              <button className="btn-submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
