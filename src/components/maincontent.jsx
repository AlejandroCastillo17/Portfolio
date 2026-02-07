import React, { useState } from "react";
import "../styles/maincontent.css";
import icohtml from "../assets/images/html.png"
import icocss from "../assets/images/css.png"
import icoreact from "../assets/images/react.png"
import icocsharp from "../assets/images/csharp.png"
import iconet from "../assets/images/net.png"
import icomysql from "../assets/images/mysql.png"
import icopython from "../assets/images/python.png"
import icojs from "../assets/images/js.png"
import icophp from "../assets/images/php.png"
import icojava from "../assets/images/java.png"
import icosql from "../assets/images/sql.png"
import icovs from "../assets/images/vs.png"
import icovscode from "../assets/images/vscode.png"
import icogit from "../assets/images/git.png"
import icoas from "../assets/images/as.png"
import dorichips from "../assets/images/dorichips.png"
import qsabores from "../assets/images/qsabores.jpeg"
import lcv from "../assets/images/lcv.jpeg"
import kiffa from "../assets/images/kiffa.png"
import parqueadero from "../assets/images/parqueadero.png"
import certificadoTEC from "../assets/images/certTEC.jpeg"
import certificadoING from "../assets/images/progresoIng.jpg"

const MainContent = () => {

  const [showModal, setShowModal] = useState(false);
  const [certActivo, setCertActivo] = useState(null);

  const abrirModal = (cert) => {
    setCertActivo(cert);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setCertActivo(null);
  };

  return (
    <div className="main-content">

      <section id="inicio">
        <div className="ini">
          <h1>Diego Alejandro Castillo Pérez</h1>
          <h2>Desarrollador de software</h2>
          <div>
            <p>
              ¡Bienvenido a mi portafolio!  

              Aquí encontrarás una muestra de mis proyectos, habilidades y experiencia en desarrollo
              de software. Me apasiona crear soluciones innovadoras con tecnología, y este espacio
              refleja mi evolución como desarrollador.

              Explora mis trabajos, conoce más sobre lo que hago y no dudes en contactarme
              si quieres colaborar o compartir ideas. ¡Gracias por visitar!
            </p>  
          </div>
          <a href="/HOJADEVIDA-DACP.pdf" download="HOJADEVIDA-DACP.pdf">
            <button> Descarga mi Hoja de vida </button>
          </a>
        </div>
      </section>

      <section id="sobre-mi">
        <div className="sobremi">
          <h1>Sobre Mí</h1>
          <div>
            <p>Soy un Tecnólogo en Desarrollo de Software y estudiante de noveno semestre de
              Ingeniería de Software. Me apasiona explorar nuevas tecnologías y enfrentar desafíos
              del mundo real. Además, cuento con experiencia en desarrollo de aplicaciones de escritorio, 
              movil y desarrollo web. Me encuentro ampliando mis habilidades en desarrollo front-end
              y back-end, con un gran interés en aprender y crear soluciones innovadoras, productivas
              y creativas..  
            </p>
          </div>
        </div>
      </section>

      <section id="proyectos">
        <div className="proyetos">
          <h1>Proyectos</h1>
          <ul>
            <li>
              <div className="p_dorchips">
                <img className="p-img" src={kiffa} alt="Kiffa Bar" />
                <a className="p-link" href="https://github.com/AlejandroCastillo17/GDI-Kiffas/tree/main" target="_blank">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <div className="p-info">
                  <h2>KIFFA BAR</h2>
                  <p>
                    Aplicacion de escritorio para la gestion
                    de ventas e inventario de Kiffa Bar. 
                  </p>
                  <div>
                    <img src={icocsharp} alt="" />
                    <img src={iconet} alt="" />
                    <img src={icomysql} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="p_qsabores">
                <img className="p-img" src={qsabores} alt="Q'SABORES" />
                <a className="p-link" href="https://github.com/AlejandroCastillo17/GDI-Q-SABORES" target="_blank">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <div className="p-info">
                  <h2>Q'SABORES</h2>
                  <p>
                    Aplicación web desarrollada para ser un sistema administrativo
                    de ventas e inventario para el negocio local Q'Sabores.
                  </p>
                  <div>
                    <img src={icoreact} alt="" />
                    <img src={icopython} alt="" />
                    <img src={icocss} alt="" />
                  </div>
                </div>  
              </div>
            </li>
            <li>
              <div className="p_dorchips">
                <img className="p-img" src={parqueadero} alt="PARQUEADERO KIFFA" />
                <a className="p-link" href="https://github.com/AlejandroCastillo17/Parquedero-Kiffas" target="_blank">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <div className="p-info">
                  <h2>PARQUEADERO KIFFA</h2>
                  <p>
                    Sistema integral de escritorio para la gestión  y administración total del parqueadero kiffa. 
                  </p>
                  <div>
                    <img src={icocsharp} alt="" />
                    <img src={iconet} alt="" />
                    <img src={icomysql} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="p_lcv">
                <img className="p-img" src={lcv} alt="La Curva Verdolaga" />
                <a className="p-link" href="https://github.com/AlejandroCastillo17/La-Curva-Verdolaga" target="_blank">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <div className="p-info">
                  <h2>La Curva Verdolaga</h2>
                  <p>
                    Pagina web desarrollada cuando me encontraba en formación,
                    es un fanspage dirigido al club de futbol ateltico nacional.
                  </p>
                  <div>
                    <img src={icohtml} alt="" />
                    <img src={icocss} alt="" />
                    <img src={icoreact} alt="" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="p_dorchips">
                <img className="p-img" src={dorichips} alt="GDI - Dorichips" />
                <a className="p-link" href="https://github.com/AlejandroCastillo17/Proyecto-Dorichips" target="_blank">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                </a>
                <div className="p-info">
                  <h2>GDI - DORICHIPS</h2>
                  <p>
                    Aplicacion de escritorio para la gestion
                    de ventas e inventario de la tienda de comidas rapidas Dorichips. 
                  </p>
                  <div>
                    <img src={icocsharp} alt="" />
                    <img src={iconet} alt="" />
                    <img src={icomysql} alt="" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="educacion">
        <div className="educa">
          <h1>Educación</h1>
          <div className="cont-edu">
            <div className="edu">
              <h3>TECNOLOGIA EN DESARROLLO DE SOFTWARE</h3>
              <h3>2022 - 2025</h3>
            </div>
            <h4> Institución Universitaria Pascual Bravo</h4>
            <button onClick={() => abrirModal(certificadoTEC)}>Certificado</button>
          </div>
          <div className="cont-edu">
            <div className="edu2">
              <h3>INGENIERIA DE SOFTWARE</h3>
              <h3>2025 - Actualidad</h3>
            </div>
            <h4> Institución Universitaria Pascual Bravo</h4>
            <button onClick={() => abrirModal(certificadoING)}>Certificado</button>
          </div>
        </div>

        {showModal && (
          <div className="modal-contenedor" onClick={cerrarModal}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <button className="cerrar" style={{ fontSize: '20px', padding: '5px 10px', position: 'absolute', top: '10px', right: '15px' }} onClick={cerrarModal}>×</button>
              <img src={certActivo} alt="Certificado" />
            </div>
          </div>
        )}

      </section>

      <section id="competencias">
        <div className="comp">
          <h1>Competencias</h1>
          <h2>LENGUAJES DE PROGRAMACIÓN</h2>
          <div>
            <img src={icocsharp} alt="" />
            <img src={icohtml} alt="" />
            <img src={icocss} alt="" />
            <img src={icojs} alt="" />
            <img src={icophp} alt="" />
            <img src={icojava} alt="" />
            <img src={icosql} alt="" />
          </div>
          <h2>FRAMEWORKS Y LIBRERIAS</h2>
          <div>
            <img src={iconet} alt="" />
            <img src={icoreact} alt="" />
          </div>
          <h2>SOFTWARE Y HERRAMIENTAS</h2>
          <div>
            <img src={icovscode} alt="" />
            <img src={icovs} alt="" />
            <img src={icoas} alt="" />
            <img src={icogit} alt="" />
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="contenedor">
          <h1>Contactatame!</h1>
          <div className="contac">
            <svg  className="ratas" xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"
                fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
            <p>
              WhatsApp 
              <a href="https://wa.me/573004021102"> +57 3004021102 </a>
            </p>
          </div>
          <div className="contac">
            <svg className="ratas" xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  
              fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-mail">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
            <p>
              Email
              <a href="mailto:Alejandrocastilloperez17@gmail.com">Alejandrocastilloperez17@gmail.com</a>
            </p>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/diego-alejandro-castillo-p%C3%A9rez/">
              <svg  className="ratas" xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  
                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
                class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" 
                d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" />
                <path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </a>
            <a href="https://github.com/AlejandroCastillo17">
              <svg  className="ratas" xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  
                stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
