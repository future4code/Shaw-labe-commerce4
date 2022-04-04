import React from "react";
import styled from 'styled-components';
import App from './App';

const FiltroCss= styled.div`
display: flex;
border: 3px solid black;
top: 170px;
background-color: blueviolet;
flex-grow: 1;
`

export class Filtros extends React.Component {
    
    //const listaPrecoProduto 
    //const listaNomeProduto
    //funtion BotaoLimpaFiltro()
    
    state={
        BotaoLimpaFiltro:""
    }

    render(){
        return (

            <FiltroCss>
    
                <h3>Filtros</h3>
                
                <form className="formularioFiltragem">
    
                    <lable>Buscar produto</lable><br />
                    <input placeholder="Digite o nome do produto"></input><br />
    
                    <br /><lable>Valor máximo:</lable><br />
                    <input></input><br />
    
                    <br /><lable>Valor mínimo:</lable><br />
                    <input></input><br />
    
                    <br /><button className="limpa-filtro" onClicK={BotaoLimpaFiltro}>Limpar Filtros</button>
    
                </form>        
    
    
    
            </FiltroCss>
    
        )
    }
    

}
    




