import React from 'react';
import Styled from 'styled-components';
import './App.css';
import { Header } from './components/Header.js';
import { filtro } from './components/Filtros';
import { Main } from './components/Main';
export class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>

        

        <filtro className='filtro-carrinho'>
         
        </filtro>

        <Main>
         
        </Main>
      </div>
    );
  }
}

export default App;
