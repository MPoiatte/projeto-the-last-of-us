/* 
    OBJETIVO -  quando clica no botão tem que mostrar a imagem de fundo correspondente

    - 1º - Dar um jeito de pegar o elemento HTML dos botões

    - 2º - Dar um jeito de identificar o clique do usuário no botão

    - 3º - Desmarcar o botão selecionado anterior

    - 4º - Marcar o botão clicado como se estivesse selecionado

    - 5º - Esconder a imagem ATIVA de fundo

    - 6º - Fazer aparecer a imagem correspondente ao botão clicado
*/

//- 1º - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//- 2º - Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

    })
}) 

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
