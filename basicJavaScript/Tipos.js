//Tipos Primitivos


    //1. String (Cadeia de Caracteres)
    var nome = "João";
    var mensagem = 'Olá, Mundo!';


    //2. Number (Número)
    var idade = 30;
    var altura = 1.75;


    //3. Boolean (Booleano)
    var aprovado = true;
    var reprovado = false;


    //4. Undefined e Null
    var valorNaoInicializado;
    var valorNulo = null;


    //5. Symbol (Símbolo)
    var simbolo1 = Symbol('chave');
    var simbolo2 = Symbol('chave');

//

//Tipos de Referência


    //6. Object (Objeto)
    var pessoa = {
        nome: "Maria",
        idade: 25,
        cidade: "Lisboa"
    };


    //7. Array (Matriz)
    var frutas = ["maçã", "banana", "laranja"];
    var numeros = [1, 2, 3, 4, 5];


    //8. Function (Função)
    function somar(a, b) {
        return a + b;
    }


    //Tipagem Dinâmica
    var variavel = "Isso é uma string";
    variavel = 42; // Agora é um número

    //Conversão de Tipos
    var numero = 42;
    var texto = String(numero); // Converte para string
    var valor = "3.14";
    var numeroDecimal = parseFloat(valor); // Converte para número de ponto flutuante