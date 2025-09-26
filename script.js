/*
 * Arquivo: js/script.js
 * Responsabilidade: Contém a lógica de programação do seu projeto.
 * O 'index.html' se conecta a este arquivo usando a tag <script type="module">.
 */

/**
 * Função para atualizar a mensagem na área de exibição.
 * @param {string} message A nova mensagem a ser exibida.
 * @param {string} elementId O ID do elemento HTML a ser modificado.
 */
function updateStatus(message, elementId) {
    const messageArea = document.getElementById(elementId);
    
    // Verifica se o elemento existe antes de tentar modificá-lo
    if (messageArea) {
        messageArea.textContent = message;
        console.log("Status da aplicação atualizado com sucesso!");
    } else {
        console.error(`Erro: O elemento com ID '${elementId}' não foi encontrado no DOM.`);
    }
}

// 1. O código JavaScript é executado após o carregamento do DOM (já que o script está no final do <body>)
// 2. Chamamos a função principal para iniciar a lógica da aplicação
document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de lógica: trocar a mensagem inicial
    const dataAtual = new Date().toLocaleTimeString('pt-BR');
    updateStatus(`A aplicação JavaScript foi carregada e executada às ${dataAtual}.`, 'message-area');
});

// Você pode adicionar outras funções aqui, como manipuladores de eventos de botão,
// funções de cálculo, ou chamadas de API.
