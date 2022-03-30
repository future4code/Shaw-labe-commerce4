import React from 'react';
import Styled from 'styled-components';
import './App.css';
import {Header} from './components/Header';
export class App extends React.Component {

  render(){
  return (
    <div>
      <Cabecalho>
        
      </Cabecalho>

      <div className='filtro-carrinho'>
        Aqui estão os filtros e carrinho
      </div>

      <main>
        Produtos aqui
      </main>
    </div>
  );
}
}

export default App;
