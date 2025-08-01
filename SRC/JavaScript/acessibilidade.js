document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('batao_acessibilidade');
    const opçõesDeAcessibilidade = document.getElementById('opções_acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao_botao');
        opçõesDeAcessibilidade.classList.toggle('apresenta-lista');
    })
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte < 2) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function() {
        if (tamanhoAtualFonte > 0.8) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });
});
