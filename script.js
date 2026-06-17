// Aguarda o carregamento do DOM para evitar erros de execução
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. FUNCIONALIDADE: CONTROLE DE ACESSIBILIDADE (MODO ESCURO) ---
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        // Captura o tema atual do atributo raiz do HTML
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';

        // Processa a informação na variável antes de aplicar na tela
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
            themeToggleBtn.textContent = 'Alternar Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Alternar Modo Escuro';
        }

        // Modifica o DOM dinamicamente mudando o atributo
        document.documentElement.setAttribute('data-theme', newTheme);
    });


    // --- 2. FUNCIONALIDADE: VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO ---
    const quizForm = document.getElementById('quiz-form');
    const quizResultDiv = document.getElementById('quiz-result');

    quizForm.addEventListener('submit', (event) => {
        // Impede o recarregamento padrão da página ao enviar o formulário
        event.preventDefault();

        // Armazena o valor selecionado pelo usuário em uma variável de processamento
        const userAnswer = document.getElementById('pergunta1').value;

        // Remove a classe que esconde a div de resultado
        quizResultDiv.classList.remove('hidden');

        // Processa as variáveis e atualiza o texto/estilo dinamicamente no DOM
        if (userAnswer === 'verificar') {
            quizResultDiv.textContent = 'Parabéns! Resposta Correta. Verificar os fatos em agências de checagem confiáveis quebra o ciclo de desinformação automatizada.';
            quizResultDiv.style.backgroundColor = '#d4edda';
            quizResultDiv.style.color = '#155724';
            quizResultDiv.style.border = '1px solid #c3e6cb';
        } else {
            quizResultDiv.textContent = 'Atenção! Essa ação ajuda a propagar mídias manipuladas por IA. Sempre investigue antes de agir ou compartilhar.';
            quizResultDiv.style.backgroundColor = '#f8d7da';
            quizResultDiv.style.color = '#721c24';
            quizResultDiv.style.border = '1px solid #f5c6cb';
        }
    });
});
