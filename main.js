var respondido = 0;
var respostasOi = ["oi", "ola", "yo"];
var respostasAcorda = ["Acordar", "acorda", "levanta", "parar", "para", "acorda gato burro", "olha o gustavo lima"];

function verificarInput() {
    var resposta = document.getElementById("input").value;
    document.getElementById("input").value = "";
    if (respondido === 0) {
        if (respostasOi.includes(resposta.toLowerCase())) {
            alert("vc cumprimentou o gatinho burro!!! ele está feliz :)");
            respondido = 1;
            hello.innerHTML = "tudo bem? (sim ou não)";
            return;
        } else if (resposta.toLowerCase() === "não" || resposta.toLowerCase() === "nao") {
            alert("então vai se fuder")
        } else {
            alert("eu sou burro, vc precisa escrever perfeitamente");
        }
    }

    if (respondido === 1) {
        if (resposta.toLowerCase() === "sim") {
            alert("que bom! mas vou voltar a dormir agora");
            document.getElementById("image").src = "/assets/gatosleep.png"
            hello.innerHTML = "acorde o gato";
            respondido = 2;
            return;
        } else if (resposta.toLowerCase() === "não" || resposta.toLowerCase() === "nao") {
            alert("eu quero mais é que vc se foda");
        } else {
            alert("fala certo burro");
        }
    }

    if (respondido === 2) {
        if (respostasAcorda.includes(resposta.toLowerCase())) {
            acordarGato();
        } else if (resposta.toLowerCase() === "não" || resposta.toLowerCase() === "nao") {
            alert("entao pode sair do site, ele dorme por muito tempo");
        } else {
            alert("depois o gato que é burro né, digita certo seu macaco");
        }
    }
}

function acordarGato() {
    if (respondido === 2) {
    alert("oioi (o gato acordou e não lembra de mais nada)");
    hello.innerHTML = "de oi para o gato!";
    respondido = 0;
    document.getElementById("image").src = "/assets/gatowakeup.png"
    return
    }
}

