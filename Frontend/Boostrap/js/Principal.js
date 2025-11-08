
// NO SE TOCA

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".plan-card");
  const carousel = document.querySelector(".card-carousel");

  let current = Math.floor(cards.length / 2);

  function updateClasses() {
    cards.forEach((card, i) => {
      card.classList.remove("prev", "active", "next");
      if (i === current) {
        card.classList.add("active");
      } else if (i === (current - 1 + cards.length) % cards.length) {
        card.classList.add("prev");
      } else if (i === (current + 1) % cards.length) {
        card.classList.add("next");
      }
    });

    const offset = (carousel.offsetWidth / 2) - (cards[current].offsetWidth / 2);
    carousel.style.transform = `translateX(${offset - current * (cards[current].offsetWidth + 40)}px)`;
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      current = index;
      updateClasses();
    });
  });

  updateClasses();
});
