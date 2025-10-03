// Tema escuro/claro
const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

// Verificar tema salvo no localStorage ou preferência do sistema
function checkThemePreference() {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    rootHtml.setAttribute('data-theme', savedTheme);
    
    // Atualizar o estado do botão
    if (savedTheme === 'dark') {
        document.querySelector('.theme-toggle').classList.add('dark-mode');
    } else {
        document.querySelector('.theme-toggle').classList.remove('dark-mode');
    }
}

// Função para trocar o tema
function changeTheme() {
    const currentTheme = rootHtml.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Aplicar o novo tema
    rootHtml.setAttribute('data-theme', newTheme);
    
    // Salvar preferência
    localStorage.setItem('theme', newTheme);
    
    // Adicionar classe para a animação
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.classList.toggle('dark-mode');
    
    // Adicionar efeito de clique
    themeToggle.classList.add('clicked');
    setTimeout(() => {
        themeToggle.classList.remove('clicked');
    }, 300);
}

// Inicializar tema ao carregar a página
document.addEventListener('DOMContentLoaded', checkThemePreference);

// Adicionar evento de clique ao botão de alternar tema
toggleTheme.addEventListener('click', changeTheme);

// Botão Voltar ao Topo
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Inicialmente esconder o botão
        backToTopButton.style.opacity = '0';
        backToTopButton.style.visibility = 'hidden';
        backToTopButton.style.transform = 'translateY(20px)';
        
        // Mostrar/ocultar o botão ao rolar a página
        function toggleBackToTop() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.visibility = 'visible';
                backToTopButton.style.transform = 'translateY(0)';
            } else {
                backToTopButton.style.opacity = '0';
                backToTopButton.style.visibility = 'hidden';
                backToTopButton.style.transform = 'translateY(20px)';
            }
        }
        
        window.addEventListener('scroll', toggleBackToTop);

        // Rolagem suave ao clicar no botão
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Verificar posição inicial
        toggleBackToTop();
    }
});