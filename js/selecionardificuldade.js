const telaPrincipal = document.getElementById("tela");
const telaInicial = document.getElementById("telaInicial");

function skipar() {

    telaInicial.classList.add("principal");
    telaInicial.style.display = "none"

    const containerSection = document.createElement("section");
    containerSection.classList.add("container");
    telaPrincipal.appendChild(containerSection);

    const textoSelecione = document.createElement("h2");
    textoSelecione.innerText = "Selecione a dificuldade";
    containerSection.appendChild(textoSelecione);

    const containerBotoesDifficulty = document.createElement("div")
    containerBotoesDifficulty.classList.add("container-botoes-dificuldade");
    containerSection.appendChild(containerBotoesDifficulty);
    
    const botoesdificuldadeEasy = document.createElement("button");
    botoesdificuldadeEasy.classList.add("botoes-dificuldade");
    botoesdificuldadeEasy.innerText = "Easy"
    containerBotoesDifficulty.appendChild(botoesdificuldadeEasy);

    const botoesdificuldadeMedium = document.createElement("button");
    botoesdificuldadeMedium.classList.add("botoes-dificuldade");
    botoesdificuldadeMedium.innerText = "Medium"
    containerBotoesDifficulty.appendChild(botoesdificuldadeMedium);

    const botoesdificuldadeHard = document.createElement("button");
    botoesdificuldadeHard.classList.add("botoes-dificuldade");
    botoesdificuldadeHard.innerText = "Hard"
    containerBotoesDifficulty.appendChild(botoesdificuldadeHard);

    const  containerVoltar = document.createElement("div")
    containerVoltar.classList.add("container-Voltar")
    containerSection.appendChild(containerVoltar)

    const botaoVoltar = document.createElement("button");
    botaoVoltar.classList.add("botao-voltar");
    botaoVoltar.innerText = "Go back";
    containerVoltar.appendChild(botaoVoltar);

}