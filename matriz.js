var matriz_principal = [
    [2, 0, 2, 0, 0, 2, 0, 1, 2, 0],
    [0, 1, 0, 2, 0, 1, 0, 0, 0, 0],
    [0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
    [0, 0, 0, 2, 0, 1, 0, 0, 0, 0],
    [2, 0, 0, 2, 0, 0, 2, 1, 0, 0],
    [1, 0, 1, 0, 2, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 2, 0, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 2, 0, 0, 0, 0, 0]
]

function gerarMatriz() {
    let frase = ''
    for (var linha = 0; linha < matriz_principal.length; linha++) {
        for (var coluna = 0; coluna < matriz_principal[linha].length; coluna++) {
            frase += `<div class="dado" id="div-${linha}${coluna}">${matriz_principal[linha][coluna]}</div>`
        }
    }
    div_matriz.innerHTML = frase;
}

var totalTesouros = 0;
for (let i = 0; i < matriz_principal.length; i++){
    for (let j = 0; j < matriz_principal[i].length;j ++){
        if (matriz_principal[i][j] == 1){
            totalTesouros += 1;
        }
    }
}
var contadorTesouro = 0;

function escavar() {
    var linha = ipt_linha.value;
    var coluna = ipt_coluna.value;
    
    if (!linha || !coluna){
        return alert('Inserir posição válida');
    }
    if (matriz_principal[linha][coluna] < 0){
        return alert('Casa já selecionada!')
    }

    if (matriz_principal[linha][coluna] == 1) {
        contadorTesouro += 1;
        sessionStorage.setItem('tesouro', contadorTesouro)
        div_resultado.innerHTML = 'Você ganhou um tesouro!';
        div_resultado.innerHTML += `<br>Total de tesouros: ${sessionStorage.getItem('tesouro')}`;
    } else if (matriz_principal[linha][coluna] == 2) {
        div_resultado.innerHTML = 'Perdeu!';
        div_continuar.style.display = 'flex';
        btn_escavar.style.display = 'none';
    } else {
        console.log('Vazio')
    }
    matriz_principal[linha][coluna] *= -1;

    const div_selecionada = document.getElementById(`div-${linha}${coluna}`).classList;
    div_selecionada.add('selecionado');

    gerarMatriz(matriz_principal);
}

function continuar() {
    window.location = './resultado.html'
}

function estatisticas() {
    var tesouro = sessionStorage.getItem('tesouro');
    div.innerHTML = `Você atingiu um total de ${tesouro} tesouros <br>
    <img src="https://d1muf25xaso8hp.cloudfront.net/https://img.criativodahora.com.br/2024/08/criativo-66c7e8c08fc6bimg-2024-08-2266c7e8c08fc6e.jpg?w=1000&h=&auto=compress&dpr=1&fit=max" alt="">`;
}