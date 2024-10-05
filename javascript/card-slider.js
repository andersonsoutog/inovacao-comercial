let testimonialContainer = document.querySelector(".testimonials-container");
let testimonialCarousel = testimonialContainer.querySelector(
  ".testimonials-cards"
);
let testimonialCards = Array.from(testimonialCarousel.children);

testimonialCards.forEach((card) => {
  let duplicateCard = card.cloneNode(true);
  duplicateCard.setAttribute("aria-hidden", true);

  testimonialCarousel.appendChild(duplicateCard);
});
