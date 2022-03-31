import React from 'react';
import Styled from 'styled-components';
import './App.css';
import {Header} from './components/Header.js';
import {Filtros} from './components/Filtros';
import {Main} from './components/Main';



export class App extends React.Component {

  render() {
    return (
      <div>
        
        <p>
          ****ITENS QUE DEVEM SER RENDERIZADOS NO APP.JS***
          1. Lista de Produtos: relevante para Main e Carrinho
          2. Estados dos Filtros: relevante para Filtros e Main
        </p>

      </div>
    );
  }
}

export default App;
