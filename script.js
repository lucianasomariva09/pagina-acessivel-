document.addEventListener('DOMContentLoaded',function(){

const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opicoes-acessibilidade');

botaoAcessibilidade.addEventListener('click', function (){
botaoAcessibilidade.classList.toggle('rotacao-lista');
opcoesAcessibilidade.classList.toggle('apresenta-lista');
}
)

const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminuir-fonte');

let tamanhoAtualFonte= 1;

aumentaFonteBotao.addEventListener('click', function () {
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

diminuiFonteBotao.addEventListener('click', function () {
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    
    })

})
