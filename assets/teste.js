




//Função para apresentar os elementos na tela do usuário
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//capturar os elementos do input
function receberInput() {
    let input = document.getElementById('caracteres').value;
    return input;
}

//função que verifica se todas as letras são minúsculas
function verificarMaisuculas(letra) {
    let letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (!letrasMinusculas.includes(letra)) {
        return false;
    }
    return true;
}

function limparLbl(){
    let clean = document.querySelector('.teste');
    clean.innerHTML = 'Resultado: ';

};

//Função para limpar os elementos do input e resultado.
function limparProblemas() {
    let chute = document.getElementById('caracteres');
    chute.value = '';
    limparLbl();
};



//Função de codificar o texto


//vetores utilizados na função undo sendo inicializados com esses 2 valores de 'ajuda' na undoCodificador;
let inputCarac = [''];
let palavrasCodificadas = ['Resultado'];



function codificarTexto() {
    let nome = receberInput();
    let i = 0;
    let codificadoArray = [];
    let teste = true;
    document.getElementById('undo').disabled = false;


    //adicionar no meu vetor a palavra inserida;
    inputCarac.push(nome);

    // função para 'codificar' as vogais as suas correspondentes
    function verificar(letra) {
        if (letra == 'e') {
            return 'enter';
        }
        if (letra == 'i') {
            return 'ime';
        }
        if (letra == 'a') {
            return 'ai';
        }
        if (letra == 'o') {
            return 'ober';
        }
        if (letra == 'u') {
            return 'ufat';
        } else {
            return letra;
        }
    }

    //verificação da variável
    for (i = 0; i < nome.length; i++) {
        let letra = nome[i];
        if (!verificarMaisuculas(letra)) {
            alert("Insira apenas letras minúsculas");
            limparProblemas();
            teste = false;
            break;
        }
        console.log(verificar(letra));
        codificadoArray.push(verificar(letra));
    }

    if (teste == false) {
        //Chamando a função de limpar porque não funcionou da primeira vez
        limparProblemas();
    } else {
        console.log(codificadoArray);
        let nome2 = codificadoArray.join('');
        console.log(nome2);
        exibirTextoNaTela('h2', `${nome2}`);
        //inserir no meu código a palavra já codificada
        palavrasCodificadas.push(nome2);
        console.log(palavrasCodificadas);
        console.log(inputCarac);
    }


    
}


function undoCodificador(){

    //Pegar o último elemento do meu vetor input e apresentar na Tela
    console.log(inputCarac[inputCarac.length - 2]);
    document.getElementById('caracteres').value = inputCarac[inputCarac.length - 2];
    console.log(inputCarac);

    //Pegar o último elemento do meu vetor 'resultado' e apresentar na tela
    console.log(palavrasCodificadas[palavrasCodificadas.length - 2]);
    exibirTextoNaTela('h2', `${palavrasCodificadas[palavrasCodificadas.length - 2]}`);
    console.log(palavrasCodificadas);

    //Fazer a verificação para caso haja 2 elementos e dropar o último que foi usado
    if (inputCarac.length > 1){
        inputCarac.pop(inputCarac[inputCarac.length - 1]);
        palavrasCodificadas.pop(palavrasCodificadas[palavrasCodificadas.length - 1]);
    }

    //Verificar se o elemento final é o meu 1, e desabilitar o botão undo
    if (inputCarac.length == 1){
        document.getElementById('undo').disabled = true;
        alert('Insira uma nova palavra!');
    }
}



let palavrasDescodificadas = ['Resultado'];
let inputdescriptografado = [''];


//Início da parte de descriptografar
function descriptografarTexto() {
    let entradaCriptografada = receberInput();
    let arrayCriptografada = [];
    let i = 0;
    let descodificado;
    let testeValido = true;

    inputdescriptografado.push(receberInput());
    document.getElementById('undoDescodificador').disabled = false;

    //Loop para descriptografar cada letra
    do {
        if (entradaCriptografada[i] == 'a') {
            arrayCriptografada.push('a');
            i += 2;
        } else if (entradaCriptografada[i] == 'i') {
            arrayCriptografada.push('i');
            i += 3;
        } else if (entradaCriptografada[i] == 'e') {
            arrayCriptografada.push('e');
            i += 5;
        } else if (entradaCriptografada[i] == 'o') {
            arrayCriptografada.push('o');
            i += 4;
        } else if (entradaCriptografada[i] == 'u') {
            arrayCriptografada.push('u');
            i += 4;
        } else if (!verificarMaisuculas(entradaCriptografada[i])) {
            alert("Insira apenas letras minúsculas");
            limparProblemas();
            testeValido = false;
            break;
        } else {
            arrayCriptografada.push(entradaCriptografada[i]);
            i++;
        }
    } while (i < entradaCriptografada.length);
    if (testeValido) {
        descodificado = arrayCriptografada.join('');
        console.log(descodificado);
        exibirTextoNaTela('h2', `Palavra Descodificada: ${descodificado}`);
        palavrasDescodificadas.push(descodificado);
    }
}



function undoDescodificador(){

    //Pegar o último elemento do meu vetor input e apresentar na Tela
    console.log(inputdescriptografado[inputdescriptografado.length - 2]);
    document.getElementById('caracteres').value = inputdescriptografado[inputdescriptografado.length - 2];
    console.log(inputdescriptografado);

    //Pegar o último elemento do meu vetor 'resultado' e apresentar na tela
    console.log(palavrasDescodificadas[palavrasDescodificadas.length - 2]);
    exibirTextoNaTela('h2', `${palavrasDescodificadas[palavrasDescodificadas.length - 2]}`);
    console.log(palavrasDescodificadas);

    //Fazer a verificação para caso haja 2 elementos e dropar o último que foi usado
    if (inputdescriptografado.length > 1){
        inputdescriptografado.pop(inputdescriptografado[inputdescriptografado.length - 1]);
        palavrasDescodificadas.pop(palavrasDescodificadas[palavrasDescodificadas.length - 1]);
        document.getElementById('undoDescodificador').disabled = false;
    }

    //Verificar se o elemento final é o meu 1, e desabilitar o botão undo
    if (inputdescriptografado.length == 1){
        document.getElementById('undoDescodificador').disabled = true;
        alert('Insira uma nova palavra!');
    }
}



//Montar direitinho a explicação
function copyText() {

    let copyText = document.getElementById("result").innerText;

    
    navigator.clipboard.writeText(copyText)
        .then(() => {

            alert("Texto copiado: " + copyText);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}




