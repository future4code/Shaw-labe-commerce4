import React from "react";
//import {Produtos} from "./App.js";
import Styled from 'styled-components';

const Filtro = Styled.div`
display:flex;
border: 3px solid black;
top: 170px;
background-color: blue;
flex-grow: 1;
`


export function Filtros(props) {
    //const listaPreco = props.lista.filter((produtos))
    //const listaNome

    //

    //BotaoLimpaFiltro()

    return (
        <Filtro>

            <h3>Filtros</h3>

            <form className="formularioFiltragem">

                <lable>Buscar produto</lable><br />
                <input placeholder="Digite o nome do produto"></input><br />

                <br /><lable>Valor máximo:</lable><br />
                <input></input><br />

                <br /><lable>Valor mínimo:</lable><br />
                <input></input><br />

                <br /><button className="limpa-filtro" onClicK={props.onClickBotaoLimpaFiltro}>Limpar Filtros</button>

            </form>





            <p>
                REQUISITOS LABENU
                filtro numero/preço
                - [ ]  O usuário deve ser capaz de filtrar os itens por preço mínimo
                - [ ]  O usuário deve ser capaz de filtrar os itens por preço máximo
                - [ ]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente

                filtro nome
                - [ ]  O usuário deve ser capaz de realizar uma busca por nome

                vai rolar não:
                - [x]  O usuário deve ser capaz de adicionar filtros, busca e ordenação simultaneamente

                voltar estado inicial
                - [ ]  O usuário deve ser capaz de retornar à visualização sem filtros
            </p>



        </Filtro >

    )
}





