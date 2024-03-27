document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var nota01 = parseInt(document.getElementById("nota01").value);
    var nota02 = parseInt(document.getElementById("nota02").value);
    var nota03 = parseInt(document.getElementById("nota03").value);

    var media = Math.round((nota01 + nota02 + nota03) / 3);

    var resultado = document.getElementById("resultado");
    var mensagem = document.getElementById("mensagem");

    if (media > 60) {
        mensagem.innerText = `Parabéns, ${nome}! Sua média é ${media}. Você está aprovado!`;
    } else {
        mensagem.innerText = `Lamento, ${nome}, sua média é ${media}. Você está reprovado.`;
    }
    resultado.style.display = "block";
});
