// Função para criar o efeito de hover de forma inteligente
function configurarHover(classeBloco, classeLinha) {
    const bloco = document.querySelector(classeBloco);
    const linha = document.querySelector(classeLinha);

    if (bloco && linha) {
        bloco.addEventListener('mouseenter', () => linha.classList.add('ativo'));
        bloco.addEventListener('mouseleave', () => linha.classList.remove('ativo'));
    }
}

// Configura o efeito para as três seções instantaneamente
configurarHover('.between', '.row-1');
configurarHover('.evenly', '.row-2');
configurarHover('.around', '.row-3');