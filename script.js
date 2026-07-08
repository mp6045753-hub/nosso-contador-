function entrar() {
    const senha = document.getElementById("senha").value;

    if (senha === "25032026") {
        document.getElementById("login").style.display = "none";
        document.getElementById("site").style.display = "block";
    } else {
        document.getElementById("erro").innerHTML = "❤️ Senha incorreta";
    }
}

const dataInicio = new Date("2026-03-25T00:00:00");

function atualizarContador() {

    const agora = new Date();

    let diff = agora - dataInicio;

    if (diff < 0) {
        document.getElementById("contador").innerHTML =
        "Nosso namoro ainda vai começar ❤️";
        return;
    }

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const segundos = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("contador").innerHTML =
        `
        ❤️ ${dias} dias <br><br>

        ${horas} horas •
        ${minutos} minutos •
        ${segundos} segundos
        `;
}

setInterval(atualizarContador,1000);

atualizarContador();

function musica(){

window.open(
"https://www.youtube.com/results?search_query=Kamaitachi+O+Sol+e+a+Lua",
"_blank"
);

}

function criarCoracao(){

const coracao=document.createElement("div");

coracao.className="heart";

coracao.innerHTML="❤️";

coracao.style.left=Math.random()*100+"vw";

coracao.style.fontSize=
(15+Math.random()*25)+"px";

coracao.style.animationDuration=
(4+Math.random()*5)+"s";

document.body.appendChild(coracao);

setTimeout(()=>{

coracao.remove();

},9000);

}

setInterval(criarCoracao,250);

const frases=[

"❤️ Eu sempre vou escolher você.",

"💕 Você é meu lugar favorito.",

"🌹 Obrigado por existir.",

"💖 Eu te amo infinitamente.",

"✨ Cada dia com você vale a pena."

];

let indice=0;

setInterval(()=>{

document.title=frases[indice];

indice++;

if(indice>=frases.length){

indice=0;

}

},4000);
