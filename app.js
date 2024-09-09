const buttonSkipe = document.getElementById("button-skip");
const telaPrincipal = document.getElementById("tela");
const telaInicial = document.getElementById("telaInicial");

buttonSkipe.addEventListener("click", skipar);

function skipar() {

    telaInicial.classList.add("principal");
    telaInicial.style.display = "none";

    const containerSection = document.createElement("section");
    containerSection.classList.add("container");
    telaPrincipal.appendChild(containerSection);

    const textoSelecione = document.createElement("h2");
    textoSelecione.innerText = "Selecione a dificuldade";
    containerSection.appendChild(textoSelecione);

    const containerBotoesDifficulty = document.createElement("div");
    containerBotoesDifficulty.classList.add("container-botoes-dificuldade");
    containerSection.appendChild(containerBotoesDifficulty);
    
    const botoesdificuldadeEasy = document.createElement("button");
    botoesdificuldadeEasy.classList.add("botoes-dificuldade");
    botoesdificuldadeEasy.innerText = "Easy";
    containerBotoesDifficulty.appendChild(botoesdificuldadeEasy);

    botoesdificuldadeEasy.addEventListener("click", jogarNoEasy)

    function jogarNoEasy () {
        telaInicial.style.display = "none";
        containerSection.style.display = "none";

        const containerGameEasySection = document.createElement("section");
        containerGameEasySection.classList.add("container-game");
        telaPrincipal.appendChild(containerGameEasySection);

        const GameEasyHeader = document.createElement("header");
        GameEasyHeader.classList.add("HeaderGame");
        containerGameEasySection.appendChild(GameEasyHeader)

        const MainMenuButton = document.createElement("button");
        MainMenuButton.classList.add("MainMenu-button");
        GameEasyHeader.appendChild(MainMenuButton);

        const MainContainer = document.createElement("main");
        MainContainer.classList.add("mainContainerGame");
        containerGameEasySection.appendChild(MainContainer)

        const DivEngloba = document.createElement("div");
        DivEngloba.classList.add("containerDivEnglobar")
        MainContainer.appendChild(DivEngloba)


        const DivFileira = document.createElement("div");
        DivFileira.classList.add("containerFileira");
        DivEngloba.appendChild(DivFileira);
    
        const DivEspelho = document.createElement("div");
        DivEspelho.classList.add("containerDIVinDIV")
        DivFileira.appendChild(DivEspelho);

        const buttonEspelhoA = document.createElement("button");
        buttonEspelhoA.classList.add("espelhoAzul");
        DivEspelho.appendChild(buttonEspelhoA);
    
        const buttonEspelhoB = document.createElement("button");
        buttonEspelhoB.classList.add("espelhoAzul");
        DivEspelho.appendChild(buttonEspelhoB);

        buttonEspelhoA.addEventListener("click", verificarEspelho)

        function clickado (parametro) => const = "CliqueiNoA";


        function verificarEspelho() {
            const numeroAleatorio = Math.floor(Math.random() * 10);
            let LetraEspelho

            if (numeroAleatorio > 5.5) {
                LetraEspelho = "buttonEspelhoA"
            } else {
                LetraEspelho = "buttonEspelhoB" 
            }

    }
    
    const botoesdificuldadeMedium = document.createElement("button");
    botoesdificuldadeMedium.classList.add("botoes-dificuldade");
    botoesdificuldadeMedium.innerText = "Medium";
    containerBotoesDifficulty.appendChild(botoesdificuldadeMedium);

    botoesdificuldadeMedium.addEventListener("click", jogarNoMedium);

    function jogarNoMedium () {
        telaInicial.style.display = "none";
        containerSection.style.display = "None";

        const containerGameMediumSection = document.createElement("section");
        containerGameMediumSection.classList.add("container");
        telaPrincipal.appendChild(containerGameMediumSection);

        const DivEngloba = document.createElement("div");
        DivEngloba.classList.add("containerDivEnglobar")
        containerGameMediumSection.appendChild(DivEngloba)

        const DivFileira = document.createElement("div")
        DivFileira.classList.add("containerFileira");
        DivEngloba.appendChild(DivFileira);

        const DivEspelho = document.createElement("div");
        DivEspelho.classList.add("containerDIVinDIV")
        DivFileira.appendChild(DivEspelho);

        const buttonEspelho1 = document.createElement("button");
        buttonEspelho1.classList.add("espelhoAzul");
        DivEspelho.appendChild(buttonEspelho1);

        const buttonEspelho2 = document.createElement("button");
        buttonEspelho2.classList.add("espelhoAzul");
        DivEspelho.appendChild(buttonEspelho2);

    }

    const botoesdificuldadeHard = document.createElement("button");
    botoesdificuldadeHard.classList.add("botoes-dificuldade");
    botoesdificuldadeHard.innerText = "Hard";
    containerBotoesDifficulty.appendChild(botoesdificuldadeHard);

    botoesdificuldadeHard.addEventListener("click", jogarNoHard)

    function jogarNoHard () {
        telaInicial.style.display = "none";
        containerSection.style.display = "None";

        const containerGameHardSection = document.createElement("section");
        containerGameHardSection.classList.add("container")
        telaPrincipal.appendChild(containerGameHardSection)

        const DivEngloba = document.createElement("div");
        DivEngloba.classList.add("containerDivEnglobar")
        containerGameHardSection.appendChild(DivEngloba)

        const DivFileira = document.createElement("div")
        DivFileira.classList.add("containerFileira");
        DivEngloba.appendChild(DivFileira);

        const DivEspelho = document.createElement("div");
        DivEspelho.classList.add("containerDIVinDIV")
        DivFileira.appendChild(DivEspelho);

        const buttonEspelho1 = document.createElement("button");
        buttonEspelho1.classList.add("espelhoAzul");
        DivEspelho.appendChild(buttonEspelho1);

        const buttonEspelho2 = document.createElement("button");
        buttonEspelho2.classList.add("espelhoAzul");
        DivEspelho.appendChild(buttonEspelho2);

    }

    const containerVoltar = document.createElement("div");
    containerVoltar.classList.add("container-Voltar");
    containerSection.appendChild(containerVoltar);

    const botaoVoltar = document.createElement("button");
    botaoVoltar.classList.add("botao-voltar");
    botaoVoltar.innerText = "Go back";
    containerVoltar.appendChild(botaoVoltar);


    botaoVoltar.addEventListener("click", voltar); 

    function voltar(evento) {
        telaInicial.style.display = "flex";
        containerSection.style.display = "None";
    }

    return containerSection;

    console.log("Algo deu errado");
}

