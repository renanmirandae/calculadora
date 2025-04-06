const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const subtrair = (a, b) => a - b;
const separarOperadoresENumeros = (expressao) => expressao.match(/\d+|\+|\-|\*|\//g);

const inserirResultadoParcial = (array, funcao, index) => {
    let resultadoParcial = 0
    resultadoParcial = funcao(parseInt(array[index - 1]), parseInt(array[index + 1]));
    array.splice(index - 1, 3);
    array.splice(index - 1, 0, resultadoParcial);

}


export const calcularExpressao = (expressaoArray) => {
    const novoArray = separarOperadoresENumeros(expressaoArray);
    while (novoArray.length !== 1) {
        // Varrer o array e realizar o calculo de multiplicação e divisão primeiro
        novoArray.map((item, index, array) => {
            switch (item) {
                case '*':
                    inserirResultadoParcial(novoArray, multiplicar, index);
                    break;
                case '/':
                    inserirResultadoParcial(novoArray, dividir, index);
                    break;
            }
        })

        //Varrer o array restante e realizar o calculo de soma e subtração
        novoArray.map((item, index, array) => {
            switch (item) {
                case '+':
                    inserirResultadoParcial(novoArray, somar, index);
                    break;

                case '-':
                    inserirResultadoParcial(novoArray, subtrair, index);
                    break;
            }
        })
    }
    return novoArray;

}