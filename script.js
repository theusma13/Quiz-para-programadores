const btnIniciar = document.getElementById("btnIniciar");

const perguntas = document.querySelectorAll(".pergunta");

btnIniciar.addEventListener("click", () => {

    perguntas.forEach(pergunta => {
        pergunta.classList.add("mostrar");
    });

    btnIniciar.style.display = "none";

});

const btnFinalizar = document.getElementById("btnFinalizar");

const resultado = document.getElementById("resultado");

btnFinalizar.addEventListener("click", () => {

    let pontuacao = 0;

    const resposta1 = document.querySelector('input[name="pergunta1"]:checked');
    if (resposta1 && resposta1.value === "HTML") {
        pontuacao++;
    }

    const resposta2 = document.getElementById("p2")
    if (
    resposta2.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") 
    === "dominio"
    )    {
    pontuacao++;
    }

    const resposta3 = document.getElementById("p3")
    const senha = resposta3.value;

    const temMaiuscula = /[A-Z]/.test(senha);

    const temMinuscula = /[a-z]/.test(senha);

    const temNumero = /[0-9]/.test(senha);

    const temEspecial = /[^A-Za-z0-9]/.test(senha);

    if (
    temMaiuscula &&
    temMinuscula &&
    temNumero &&
    temEspecial
    ) {
    pontuacao++;
    }

    const resposta4 = document.getElementById("p4");

    const ano = resposta4.value.split("-")[0];

    if (ano === "1991") {
    pontuacao++;
    }

    const p5a = document.getElementById("p5a");

    const p5b = document.getElementById("p5b");

    const p5c = document.getElementById("p5c");

    const p5d = document.getElementById("p5d");

    if (
    p5a.checked &&
    p5c.checked &&
    !p5b.checked &&
    !p5d.checked
    ) {
    pontuacao++;
    }   

    const resposta6 = document.getElementById("p6");

    if (resposta6.files.length > 0) {

    const arquivo = resposta6.files[0];

    if (arquivo.name.endsWith(".html")) {
        pontuacao++;
    }

    }

    const resposta7 = document.getElementById("p7");

    if (resposta7.value === "type") {
    pontuacao++;
    }

    const resposta8 = document.getElementById("p8");

    if (resposta8.value.toLowerCase() === "java") {
    pontuacao++;
}

let mensagem = "";

    if (pontuacao <= 2) {

        mensagem = "Não desista! Cada tentativa é uma oportunidade de aprender!";

    } else if (pontuacao <= 4) {

        mensagem = "Você ainda precisa melhorar. Que tal estudar mais programação?";

    } else if (pontuacao <= 7) {

        mensagem = "Bom! Seu conhecimento em programação está satisfatório!";

    } else {

        mensagem = "PERFEITO!! Você está muito bem informado sobre programação!";

    }

    resultado.innerHTML = `
        <h2>Sua pontuação foi: ${pontuacao}</h2>
        <p>${mensagem}</p>
    `;

});