'use strict'

const buscarBtn = document.getElementById("buscarBtn")

async function buscarRepositorio() {
    const userInput = document.getElementById("user")
    const user = userInput.value
    const url = `https://api.github.com/users/${user}/repos`

    const response = await fetch(url)
    const data = await response.json()
    
    return data
}

function criarCard(url) {
    const card = document.createElement("div")
    card.classList.add("card")
    const titulo = document.createElement("h2")
    titulo.textContent = url.name
    const linkRepo = document.createElement("p")
    linkRepo.textContent = url.html_url
    card.replaceChildren(titulo, linkRepo)
    return card
}

async function preencherGaleria() {
    const galeria = document.getElementById("galeria-container")
    const repositorio = await buscarRepositorio()
    const cards = repositorio.map(criarCard)

    galeria.replaceChildren(...cards)
}

buscarBtn.onclick = preencherGaleria