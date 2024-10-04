// Função assíncrona para carregar header e footer
async function loadComponents() {
    try {
        const headerResponse = await fetch('components/header.html');
        const headerText = await headerResponse.text();
        document.getElementById("header").innerHTML = headerText;

        const footerResponse = await fetch('components/footer.html');
        const footerText = await footerResponse.text();
        document.getElementById("footer").innerHTML = footerText;

        // Agora que o header foi carregado, ative o evento do menu hamburguer
        activateHamburgerMenu();
    } catch (error) {
        console.error("Erro ao carregar componentes:", error);
    }
}

// Chama a função para carregar header e footer
loadComponents();

// Função para ativar o menu hamburguer
function activateHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('nav .menu');

    if (hamburger && menu) {
        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}
