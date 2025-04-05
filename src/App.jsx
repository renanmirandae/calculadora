import { Button } from "./components/Button"
import { useState } from "react";

function App() {

  //Array que armazena todos os operadores aritmeticos da calculadora
  const operadoresAritmeticos = ["+", "-", "/", "*", "="];

  //Array que armazena todos os numeros que serão utilizados na calculadora
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //Armazena os valores de cada botao incluindo os valores de operações
  const [operacao, setOperacao] = useState("");

  /*
  Essa função captura o evento de click de cada botão, captura seu value e inseri na 
  variavel de estado operacao
  */
  const handleButton = (e) => {
    e.preventDefault();
    setOperacao((prev => prev + e.target.value));
  }


  return (
    <div className="container-calculadora">
      <section className="box-tela">
        <span>
          {operacao}
        </span>
      </section>
      <section className="box-numeros">
        {/* Botões operador */}
        {operadoresAritmeticos.map(item => <Button title={item} value={item} aoClicar={handleButton} />
        )}

        {/* Botões numéricos */}
        {numeros.map(item => <Button title={item} value={item} aoClicar={handleButton} />)}
      </section>
    </div>
  )
}

export default App
