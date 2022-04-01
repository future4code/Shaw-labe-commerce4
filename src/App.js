import React from 'react';
import Styled from 'styled-components';
import './App.css';
import { Header } from './components/Header.js';
import { Filtros } from './components/Filtros';
import { Main } from './components/Main';









export class App extends React.Component {
  state = {
    listaProduto :[
      {
        id: 1,
        nome: "Nave 1",
        preco: 100.000,
        imagem: "https://pixabay.com/images/id-2624707/"
      },
      {
        id: 2,
        nome: "Nave 2",
        preco: 200.000,
        imagem: "https://pixabay.com/images/id-2841277/"
      },
      {
        id: 3,
        nome: "Nave 3",
        preco: 300.000,
        imagem: "https://pixabay.com/images/id-2651592/"
      },
      {
        id: 4,
        nome: "Nave 4",
        preco: 400.000,
        imagem: "https://pixabay.com/images/id-2730341/"
      },
      {
        id: 5,
        nome: "Nave 5",
        preco: 500.000,
        imagem: "https://pixabay.com/images/id-2923803/"
      },
      {
        id: 6,
        nome: "Nave 6",
        preco: 600.000,
        imagem: "https://pixabay.com/images/id-2749360/"
      },
      {
        id: 7,
        nome: "Nave 7",
        preco: 700.000,
        imagem: "https://pixabay.com/images/id-2808988/"
      },
      {
        id: 8,
        nome: "Nave 8",
        preco: 800.000,
        imagem: "https://pixabay.com/images/id-2837606/"
      }



    ]
  }




  render() {





    return (
      <div>



        <Header />
        <Filtros />
        <Main/>
          
        





      </div>
    );
  }
}

export default App;
