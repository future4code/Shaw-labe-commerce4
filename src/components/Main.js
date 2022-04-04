import React from "react";
import styled from 'styled-components';
import App from "../App";

const Produto = styled.div`
display:flex;
justify-content: 2000px;
flex-wrap:wrap;
width:99%;
right:100%;
justify-content: space-around;
border: 4px solid black;
`
const Item = styled.div`
display: flex;
align-items:column;
justify-items: space-between;
border: 1px solid black; 
align-items:start;
`

export function Main(props) {
    
    MeuComponenteReact = (props) => {
        
        {props.state.listaProduto.map((produto) => {
            return
            
            <p >
              <strong>{produto.nome}</strong>: {produto.preco}
            </p>
    
        })}


    return (
        <div>
            
            <form className="ordenaçãoProdutos">

                {/*<p>REFERENCIA AQUI https://pt-br.reactjs.org/docs/forms.html#the-select-tag</p>*/}

                <br/><lable>Ordenação</lable><br/>

                <select value={this.state.value} onChange={this.propCriada}>
                    <option value="crescente">Preço Crescente</option>
                    <option value="decrescente">Preço Descrescente</option>
                </select><br/>

            </form>

            <div>
               <Produto>
                    <Item>
                        id: 1,
                        nome: "Nave 1",
                        preco: 100.000,
                        imagem: "https://pixabay.com/images/id-2624707/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 2,
                        nome: "Nave 2",
                        preco: 200.000,
                        imagem: "https://pixabay.com/images/id-2841277/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 3,
                        nome: "Nave 3",
                        preco: 300.000,
                        imagem: "https://pixabay.com/images/id-2651592/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 4,
                        nome: "Nave 4",
                        preco: 400.000,
                        imagem: "https://pixabay.com/images/id-2730341/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 5,
                        nome: "Nave 5",
                        preco: 500.000,
                        imagem: "https://pixabay.com/images/id-2923803/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 6,
                        nome: "Nave 6",
                        preco: 600.000,
                        imagem: "https://pixabay.com/images/id-2749360/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 7,
                        nome: "Nave 7",
                        preco: 700.000,
                        imagem: "https://pixabay.com/images/id-2808988/"
                        <BotaoAdd/>
                    </Item>
                </Produto>

                <Produto>
                    <Item>
                        id: 8,
                        nome: "Nave 8",
                        preco: 800.000,
                        imagem: "https://pixabay.com/images/id-2837606/"
                        <BotaoAdd/>
                    </Item>
                </Produto>
            </div>            
       
        </div>
    )
}
}

 
