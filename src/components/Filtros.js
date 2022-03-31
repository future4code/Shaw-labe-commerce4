import React from "react";
//import {Produtos} from "./App.js";
//import Styled from 'styled-components';

/*const filtro = Styled.div`
display:flex;
content-align: row;
width: 60%;
position: absolute,
border: 3px solid black,
top: 170px,
background-color: blue
`
*/


export function Filtros(props) {
    //const listaPreco = props.lista.filter((produtos))
    //const listaNome

    //

    //BotaoLimpaFiltro()

    return (
        <div className="filtros">
            
            <h3>Filtros</h3>
            
            <form className="formularioFiltragem">                

                <lable>Buscar produto</lable><br/>
                <input placeholder="Digite o nome do produto"></input><br/>

                <br/><lable>Valor máximo:</lable><br/>
                <input></input><br/>

                <br/><lable>Valor mínimo:</lable><br/>
                <input></input><br/>

                <br/><button className="limpa-filtro" onClicK={this.onClickBotaoLimpaFiltro}>Limpar Filtros</button>  

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
                
                       

        </div >
        
    )
}





