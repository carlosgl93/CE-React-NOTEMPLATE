/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Home() {
    return (
        <main role="main">
            {/* Primera seccion*/}
            <div className="firstSection">
                <div className="fTitle">
                    <h1 id="fTitle">CAMBIA TU INSTITUTO POR UN GYM</h1>
                </div>
                <div className="ftext">
                    <p>
                        "¿Lo digo en el pasado perfecto?" "¿Es drank o drunk?" "¿Cómo hago para que salga fluido?"
						<br />
                        <br />
                        <span>Deja de estudiar inglés.</span>
                        <span>Entrénalo.</span>
                    </p>
                </div>
                {/* Hubspot Form */}
                <div className="discountInput">
                    <p id="mobileCTA" onLoad="toggleText()">
                        ¡QUIERO MÁS INFORMACIÓN!
					</p>
                    <p id="desktopCTA" onLoad="toggleText()">
                        ¡ME QUIERO UNIR!
					</p>
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js" />
                    {/* <script>
						{hbspt.forms.create({
							portalId: "5256290",
							formId: "aee4dedd-9f11-4bad-af5c-537bf04c7d11"
						})}
					</script> */}
                </div>
                {/* Hubspot Form */}
                <div className="rightImage" />
            </div>
            {/* 3 main pillars */}
            <div className="multiContainer">
                <div className="secondSection">
                    <div className="dicho">
                        <h2>EL 20%</h2>
                        <p id="elDicho">
                            El que mucho abarca, poco aprieta, suelen decir. Entrena lo que se usa una y otra vez hasta
							que todo se sienta tan automático como decir {"Hello!"}
                        </p>
                    </div>
                    <div className="speaking">
                        <img src="CEspeaking.png" alt="Speaking English effortless" />
                    </div>

                    <div className="practice">
                        <h2>ACTIVE PRACTICE</h2>
                        <p>
                            Entrena el inglés de la misma manera que entrenas un deporte. Practica tus habilidades con
                            actividades dinámicas de alta velocidad y después úsalas mientras hablas. ¡Practícalas
                            activamente!
						</p>
                    </div>
                    <div className="lifting">
                        <img src="CElifting.png" alt="Aprende practicando" />
                    </div>
                    <div className="motivation">
                        <h2>MOTIVACIÓN</h2>
                        <p>
                            Menos horas por sesión y más sesiones por semana significan que verás un progreso rápido.
                            Además la constancia hace más fácil construir un hábito diario de práctica. Y cuando un día
                            te caes, nuestros Coaches estarán para levantarte y seguir adelante.
						</p>
                    </div>
                    <div className="running">
                        <img src="CErunning.png" alt="Te mantenemos motivado" />
                    </div>
                </div>
                <div className="thirdSection">
                    <h2>¿Qué esperas para poder hablar inglés fluidamente?</h2>
                    <p id="secondMobileCTA">¡QUIERO MÁS INFORMACIÓN!</p>
                    <p id="secondDesktopCTA">¡ME QUIERO UNIR!</p>
                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/shell.js" />
                    <script>
                        {/* {hbspt.forms.create({
							portalId: "5256290",
							formId: "aee4dedd-9f11-4bad-af5c-537bf04c7d11"
						})} */}
                    </script>
                </div>
            </div>
            {/* 3 main pillars */}
            {/* New Course Aler */}
            <a href="contacto.html" className="alertLink" id="linkStyle">
                <div className="alert alert-success" role="alert">
                    <div className="alertDate alignV">
                        <img className="fireworks" src="7.png" alt="" />
                        <p className="inline ">27/07</p>
                        <img className="fireworks" src="8.png" alt="" />
                    </div>
                    <div className="alertText" id="bottomTimeRemaining">
                        El próximo curso Cognitive empieza el 27 de Julio!
					</div>
                    <div className="alertDate alignV">
                        <img className="fireworks" src="7.png" alt="" />
                        <p className="inline ">27/07</p>
                        <img className="fireworks" src="8.png" alt="" />
                    </div>
                </div>
            </a>
            {/* New Course Alert */}
        </main>
    );
}
