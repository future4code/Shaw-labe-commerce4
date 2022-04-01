import React from "react";
import Styled from 'styled-components';
import App from "../App";
const Pai = Styled.div`
display:flex;
justify: content: 2000px;
flex-wrap:wrap;
width:99%;
right:100%;
justify-content: space-around;
border: 4px solid black;
`
const Produto1 = Styled.div`
display: flex;

align-items;column;
justify-items: space-between;
border: 1px solid black; 
align-items:start;

`
/*  <form className="ordenaçãoProdutos">

              <p>REFERENCIA AQUI https://pt-br.reactjs.org/docs/forms.html#the-select-tag</p>

              <br /><lable>Ordenação</lable><br />

              <select value={this.state.value} onChange={this.propCriada}>
                  <option value="crescente">Preço Crescente</option>
                  <option value="decrescente">Preço Descrescente</option>
              </select><br />

          </form>
*/



export function Main(props) {

 


    const MeuComponenteReact = (props) => {


    return (
        <div>
            


            
        {props.state.listaProduto.map((produto) => {
            return <p >
              <strong>{produto.nome}</strong>: {produto.preco}
            </p>

          })}
          </div>
    )
}
}
export default Main;

 /* <Produto1 >
                <item>

                    <img src="https://picsum.photos/201/300  " />
                    <p>item 1</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/202/300 " />
                    <p>item 2</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>


                    <img src="https://picsum.photos/203/300 " />
                    <p>item 3</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/204/300  " />
                    <p>item 4</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/205/300  " />
                    <p>item 5</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/206/300  " />
                    <p>item 6</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/207/300  " />
                    <p>item 7</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/208/300  " />
                    <p>item 8</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/209/300 " />
                    <p>item 9</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>


                    <img src="https://picsum.photos/210/300 " />
                    <p>item 10</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/211/300  " />
                    <p>item 11</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/212/300  " />
                    <p>item 12</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>
            <Produto1 >
                <item>

                    <img src="https://picsum.photos/213/300  " />
                    <p>item 13</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1> <Produto1 >
                <item>

                    <img src="https://picsum.photos/214/300  " />
                    <p>item 14</p>
                    < button> adicionar o carinho</ button>
                </item>
            </Produto1>

   */
