document.addEventListener('DOMContentLoaded',function(){

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesDeAcessibilidade = document.getElementById('opicoes-acessibilidade');

botaoDeAcessibilidade.addEventListener('click', function (){
botaoDeAcessibilidade.classList.toggle('rotacao-lista');
opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
}
)

const aumentarFonteBotao = document.getElementById('aumentar-fonte');
const diminuirFonteBotao = document.getElementById('diminuir-fonte');

const alternaContraste = document.getElementById('alterna-contraste');

let tamanhoAtualFonte= 1;

aumentarFonteBotao.addEventListener('click', function () {
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

diminuirFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    
    })
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })
})
