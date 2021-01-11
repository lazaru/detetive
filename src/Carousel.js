import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Jogo from './detetive/Jogo';

const App = document.createElement("div");

export default () => (
    <Carousel axis="vertical" emulateTouch="true" showThumbs="false" showIndicators="false" useKeyboardArrows="true">
        <div>
            <img alt="" src={dancarina} />
            <p className="legend">Dançarina Srta. Rosa</p>
        </div>
        <div>
            <img alt="" src={advogado} />
            <p className="legend">Advogado Sr. Marinho</p>
        </div>

        <div>
            <img alt="" src={chefCozinha} />
            <p className="legend">Chef de cozinha Tony Gourmet</p>
        </div>
        <div>
            <img alt="" src={coveiro} />
            <p className="legend">Coveiro Sérgio Soturno</p>
        </div>
        <div>
            <img alt="" src={florista} />
            <p className="legend">Florista Dona Branca</p>
        </div>
        <div>
            <img alt="" src={medica} />
            <p className="legend">Médica Dona Violeta</p>
        </div>
        <div>
            <img alt="" src={mordomo} />
            <p className="legend">Mordomo James</p>
        </div>
        <div>
            <img alt="" src={sargento} />
            <p className="legend">Sargento Bigode</p>
        </div>

    </Carousel>
);

/*

import advogado from './Advogado_Sr.Marinho.png';
import chefCozinha from './Chef_de_cozinha_Tony_Gourmet.png';
import coveiro from './Coveiro_Sérgio_Soturno.png';
import florista from './Florista_Dona_Branca.png';
import medica from './Médica_Dona_Violeta.png';
import mordomo from './Mordomo_James.png';
import sargento from './Sargento_Bigode.png';

<div>
            <img alt="" src={dancarina} />
            <p className="legend">Dançarina Srta. Rosa</p>
        </div>
<div>
            <img alt="" src={advogado} />
            <p className="legend">Advogado Sr. Marinho</p>
        </div>

        <div>
            <img alt="" src={chefCozinha} />
            <p className="legend">Chef de cozinha Tony Gourmet</p>
        </div>
        <div>
            <img alt="" src={coveiro} />
            <p className="legend">Coveiro Sérgio Soturno</p>
        </div>
        <div>
            <img alt="" src={florista} />
            <p className="legend">Florista Dona Branca</p>
        </div>
        <div>
            <img alt="" src={medica} />
            <p className="legend">Médica Dona Violeta</p>
        </div>
        <div>
            <img alt="" src={mordomo} />
            <p className="legend">Mordomo James</p>
        </div>
        <div>
            <img alt="" src={sargento} />
            <p className="legend">Sargento Bigode</p>
        </div>


*/