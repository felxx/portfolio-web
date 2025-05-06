document.addEventListener("DOMContentLoaded", (event) => {
    construirModal();
});

function construirModal() {
    const botaoEmail = document.getElementById("botao-email");
    const modal = document.getElementById("modal");
    const botaoFechar = document.getElementById("fechar-modal");

    botaoFechar.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    botaoEmail.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    window.addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target == modal) {
            modal.classList.add("hidden");
        }
    });
}

var radio = document.querySelector('.nav-botao')

document.getElementById('slide-1').checked = true;

let idiomaAtual = "pt";

function alterarIdioma() {
    idiomaAtual = idiomaAtual == "pt" ? "en" : "pt";
    carregarIdioma(idiomaAtual);
}

function carregarIdioma(idioma) {
    fetch(`json/${idioma}.json`)
        .then(data => data.json())
        .then(data => {
            traduzirPagina(data);
        });
}

function traduzirPagina(linguagem) {
    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        console.log(elemento);
        const chave = elemento.getAttribute("data-i18n");
        console.log(chave);
        if (linguagem[chave]) {
            elemento.textContent = linguagem[chave];
        }
    })};

/* API DOS GATO */
const cat_url = `https://api.thecatapi.com/v1/images/search`;
 fetch(cat_url)
    .then((response) => {
    return response.json();
    })
        .then((data) => {
        let imagesData = data;
        imagesData.map(function(imageData) {
            let image = document.createElement('img');
            //use the url from the image object
            image.src = `${imageData.url}`;
            document.getElementById('foto-gato').appendChild(image);
            });
        })
