document.addEventListener('DOMContentLoaded', function() {
    const aumentafontebotao = document.getElementById('aumentar-fonte');
    const diminuifontebotao = document.getElementById('diminuir-fonte');

    let tamnhoAtualFonte = 1;

    aumentafontebotao.addEventListener('click', function() {
        tamnhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamnhoAtualFonte}rem`
    })

     diminuifontebotao.addEventListener('click', function() {
        tamnhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamnhoAtualFonte}rem`
    })

})