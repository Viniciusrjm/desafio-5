function mostrarSecao(id) {
    const secoes = document.querySelectorAll('.secao');
    secoes.forEach(secao => {
        secao.classList.remove('ativa');
    });

    const secaoAtiva = document.getElementById(id);
    if (secaoAtiva) {
        secaoAtiva.classList.add('ativa');
    }
}
