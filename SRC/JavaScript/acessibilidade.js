document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('batao_acessibilidade');
    const opçõesDeAcessibilidade = document.getElementById('opções_acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao_botao');
        opçõesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelesionado = botaoDeAcessibilidade.getAttribute('aria-expaxnded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expaxnded', !botaoSelesionado)
    })
    
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const alternaCotraste = document.getElementById('alterna-cotraste')

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

    alternaCotraste.addEventListener('click', function() {
        document.body.classList.toggle('alterna-cotraste')
    })

});
