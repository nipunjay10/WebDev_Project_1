// BUCKET LIST PAGE JAVASCRIPT

// when we click a filter, only the cards iwth the matching data type should be visible

// 1. get all the filter buttons and cards
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

// 2. loop through each button and add click handler
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // read which continent this button represents
    const selectedContinent = button.dataset.continent;

    // then update which button looks active
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // loop through the cards and show or hide each one
    cards.forEach((card) => {
      const cardContinent = card.dataset.continent;

      if (selectedContinent === "all" || cardContinent === selectedContinent) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// Card flip on click
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
