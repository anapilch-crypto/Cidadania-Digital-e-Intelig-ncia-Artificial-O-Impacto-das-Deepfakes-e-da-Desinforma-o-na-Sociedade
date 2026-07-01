// Controle do Modo Escuro (Acessibilidade)
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Lógica do Jogo / Quiz Antidesinformação
function verificarQuiz(respostaUsuario) {
    const feedback = document.getElementById('quiz-feedback');
    const respostaCorreta = true; // A afirmação do HTML é verdadeira

    // Processamento das variáveis antes de exibir na tela
    if (respostaUsuario === respostaCorreta) {
        feedback.textContent = "Correto! Clonagem de voz por IA já é uma realidade utilizada em golpes de engenharia social. Fique sempre alerta!";
        feedback.className = "feedback-text correct";
    } else {
        feedback.textContent = "Incorreto. Infelizmente, isso é verdadeiro. Criminosos usam trechos curtos de redes sociais para clonar vozes.";
        feedback.className = "feedback-text incorrect";
    }
}

// Lógica da Aba de Verificação de Veracidade (Simulação Algorítmica)
function analisarMedia(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const tipoMedia = document.getElementById('media-type').value;
    const resultadoDiv = document.getElementById('analysis-result');
    const resultadoTexto = document.getElementById('analysis-text');

    // Variáveis de processamento dinâmico baseado na escolha do usuário
    let probabilidadeManipulacao = 0;
    let diagnostico = "";

    if (tipoMedia === "video") {
        probabilidadeManipulacao = 85;
        diagnostico = "Alta probabilidade de Deepfake. Foram detectados padrões assíncronos no piscar de olhos e artefatos digitais nas bordas do rosto.";
    } else if (tipoMedia === "audio") {
        probabilidadeManipulacao = 70;
        diagnostico = "Suspeita de sintetização de voz. Frequências metálicas inconsistentes com a respiração humana natural foram encontradas.";
    } else {
        probabilidadeManipulacao = 45;
        diagnostico = "Texto sob análise contextual. Recomenda-se checar agências de fact-checking conhecidas, pois carece de fontes oficiais primárias.";
    }

    // Atualização dinâmica do DOM para exibir os resultados processados
    resultadoTexto.innerHTML = `<strong>Análise para ${tipoMedia.toUpperCase()}:</strong><br>
                                 Índice de Risco Estimado: ${probabilidadeManipulacao}%<br>
                                 Parecer Técnico: ${diagnostico}`;
    
    // Revela a div de resultados removendo a classe hidden
    resultadoDiv.classList.remove('hidden');
}
