import React from "react";
import Styled from 'styled-components';
import fundo from '../images/fundo-header.png'


const Cabecalho = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    flex-wrap: wrap;
    background-image: url(${fundo});
    color: white;


nav a {
    padding: 0 16px;
}
button {
    color: #161616;
    font-size: 1rem;
    font-weight: 500;
    padding: 2px 16px;
    /* border: #fff; */
    border-radius: 6px;
    background: ;
    width: auto;
    height: 32px;
    transition: all 0.3s;
    cursor: pointer;
    }
    button:hover {
        background: darkblue;
        color: white;
}

`

export function Header() {
    return (
        <Cabecalho>
            <div>
                <h1>Merca<span><i>dinho</i></span> Pix das Galáxias</h1>
                <h3>Ao infinito (da diversão) e além</h3>
            </div>
            <nav className="cabecalho-menu">
                <a href="index.html"><button className="cabecalho-menu-item" href="index.html">Início</button></a>
                <a href="quem-somos.html"><button className="cabecalho-menu-item" href="">Sobre</button></a>
            </nav>
            <label for="check">
                <i className="fa fa-bars menu-btn"></i>
                <i className="fa fa-times close-btn"></i>
            </label>
        </Cabecalho>
    )
}
