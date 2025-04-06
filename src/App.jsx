import { Button } from "./components/Button"
import { useState } from "react";
import { calcularExpressao } from "./utils/operacosAritmeticas";
import { AppStyled } from "./App.styled";

function App() {

  //Array que armazena todos os operadores aritmeticos da calculadora
  const operadoresAritmeticos = ["+", "-", "/", "*", "=", "C"];

  //Array que armazena todos os numeros que serão utilizados na calculadora
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Armazena numeros numeros e operadores
  const listaNumerosEOperadores = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '+', '.', 0, 'C', '-', '='];

  //Armazena os valores de cada botao incluindo os valores de operações
  const [operacao, setOperacao] = useState(0);

  //Função que limpa a operação quando o botaõ C é presionado
  const limparOperacao = () => setOperacao(0)

  /*
  Essa função captura o evento de click de cada botão, captura seu value e inseri na 
  variavel de estado operacao
  */
  const handleButton = (e) => {
    e.preventDefault();

    if (e.target.value == 'C') limparOperacao();
    else
      setOperacao((prev => prev + e.target.value));
  }


  const handleCalcularExpressao = () => setOperacao(calcularExpressao(operacao))

  return (
    <AppStyled>
      <section className="box-visor">
        {operacao}
      </section>
      <section className="box-teclas">
        <table border={1}>
          <tbody>
            {
              // Quebrando o array em grupos de 4 itens (1 linha da tabela)
              Array.from({ length: 4 }, (_, linhaIndex) => {
                const inicio = linhaIndex * 4;
                const linha = listaNumerosEOperadores.slice(inicio, inicio + 4);
                return (
                  <tr key={linhaIndex}>
                    {linha.map((item, colIndex) => (
                      <td key={colIndex}>
                        <Button title={item} value={item} aoClicar={handleButton} operador={item == '*' || item == '/' || item == '-' || item == '+' ? true : ""} />
                      </td>
                    ))}
                  </tr>
                );
              })
            }
            <tr>
              <td colSpan={4}>
                <Button title={"="} value={"="} aoClicar={handleCalcularExpressao} operador={true} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </AppStyled>
  )
}

export default App;
