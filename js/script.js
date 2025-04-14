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