const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");

// Clonar primeiro e último slide
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";

slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slidesContainer.firstChild);

// Ajustar posição inicial
const slideWidth = slides[0].clientWidth;
let index = 1;
slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

// Função de atualização
function atualizarCarrossel() {
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

  // Atualiza indicadores
  indicadores.forEach((ind, i) => {
    ind.classList.toggle(
      "ativo",
      i === (index - 1 + slides.length) % slides.length
    );
  });
}

// Botões
document.getElementById("next").addEventListener("click", () => {
  if (index >= slides.length + 1) return;
  index++;
  atualizarCarrossel();
});

document.getElementById("prev").addEventListener("click", () => {
  if (index <= 0) return;
  index--;
  atualizarCarrossel();
});

// Transição infinita
slidesContainer.addEventListener("transitionend", () => {
  const allSlides = document.querySelectorAll(".slide");
  if (allSlides[index].id === "first-clone") {
    slidesContainer.style.transition = "none";
    index = 1;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  if (allSlides[index].id === "last-clone") {
    slidesContainer.style.transition = "none";
    index = slides.length;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

// Clique nos indicadores
indicadores.forEach((indicador, i) => {
  indicador.addEventListener("click", () => {
    index = i + 1; // +1 por causa do clone no início
    atualizarCarrossel();
  });
});

// Troca automática
setInterval(() => {
  index++;
  atualizarCarrossel();
}, 5000);
