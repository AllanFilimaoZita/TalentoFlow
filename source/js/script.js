// ==================== Script para o Menu Mobile ====================

// ==================== Armazendando os Elementos ====================
const abrirMenu = document.querySelector('#header-mobile .menu-open');
const fecharMenu = document.querySelector('#header-mobile .menu-close');
const navigation = document.querySelector('#header-mobile #navigation');


// ==================== Função para Abrir o Menu Mobile ====================
abrirMenu.addEventListener('click', () => {
    navigation.style.display = 'flex';
    abrirMenu.style.display = 'none';
    fecharMenu.style.display = 'block';
})

// ==================== Função para Fechar o Menu Mobile ====================
fecharMenu.addEventListener('click', () => {
    navigation.style.display = 'none';
    abrirMenu.style.display = 'block';
    fecharMenu.style.display = 'none';
})

// ==================== Função para Fechar ao clicar fora di Menu ==========
document.addEventListener('click', (e) => {
    const clicarForaMenu = !navigation.contains(e.target) && !abrirMenu.contains(e.target);

    if (clicarForaMenu) {
        navigation.style.display = 'none';
        abrirMenu.style.display = 'block';
        fecharMenu.style.display = 'none';
    }
})

// ==================== Fim do Script para o Menu Mobile ====================