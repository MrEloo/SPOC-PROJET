function imageEquip () {
    const volant = document.querySelector(".volant");
    volant.classList.add("visible");
}

const terrain = document.querySelector(".terrain");
terrain.addEventListener('click', imageEquip);