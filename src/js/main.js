async function getDigimonsApi() {
    const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json")
    return await response.json()
}

async function filtroDigimons(digimonList, digimonID) {
    const digimon = await digimonList.find((monster) => monster.id === digimonID)
    return digimon
}

async function renderDigimons(digimon) {
    const imagemDigimonElement = document.getElementById("imagem__digimon")
    const nomeDigimonElement = document.getElementById("t-name__digimon")

    const hpDigimonElement = document.getElementById("t-hp__digimon")
    const atkDigimonElement = document.getElementById("t-atk__digimon")
    const defDigimonElement = document.getElementById("t-def__digimon")

    imagemDigimonElement.src = digimon.image
    nomeDigimonElement.innerHTML = digimon.name

    hpDigimonElement.style.width = digimon.HP + '%';
    atkDigimonElement.style.width = digimon.ATK + '%';
    defDigimonElement.style.width = digimon.DEF + '%';
}

async function main() {
    const digimons = await getDigimonsApi()
    const chooseDigimons = await filtroDigimons(digimons, 6)
    await renderDigimons(chooseDigimons)
}

main()

// TODO: Criar uma função para gerar um random no id do digimon