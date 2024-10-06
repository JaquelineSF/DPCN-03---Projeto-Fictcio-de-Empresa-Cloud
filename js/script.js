// Função assíncrona para carregar header e footer
async function loadComponents() {
    try {
        // Carrega o conteúdo do header
        const headerResponse = await fetch('components/header.html');
        const headerText = await headerResponse.text();
        document.getElementById("header").innerHTML = headerText;

        // Carrega o conteúdo do footer
        const footerResponse = await fetch('components/footer.html');
        const footerText = await footerResponse.text();
        document.getElementById("footer").innerHTML = footerText;

        // Ativa o menu hambúrguer após o header ser carregado
        activateHamburgerMenu();
    } catch (error) {
        console.error("Erro ao carregar componentes:", error);
    }
}

// Função para ativar o menu hambúrguer
function activateHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('nav .menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

// Chama a função para carregar header e footer
loadComponents();

