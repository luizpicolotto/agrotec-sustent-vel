function abrirCard(card){
    card.classList.toggle("ativo");
}

function mostrarDica(){

    const dicas = [
        "💧 Economize água utilizando irrigação por gotejamento.",
        "🌱 Produza adubo orgânico através da compostagem.",
        "🐞 Utilize controle biológico para reduzir pesticidas.",
        "☀️ Invista em energia solar para diminuir custos.",
        "🍃 Preserve a vegetação nativa ao redor da plantação."
    ];

    const sorteio = Math.floor(Math.random() * dicas.length);

    document.getElementById("resultado").innerHTML = dicas[sorteio];
}
