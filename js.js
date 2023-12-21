const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("start");
const submitBtn = document.getElementById("submit-btn");
const continueBtn = document.getElementById("continue-btn");
const prevBtn = document.getElementById("prev-btn");
const myCarousel = document.querySelector("#carousel");
const carousel = new bootstrap.Carousel(myCarousel);

startBtn.addEventListener("click", () => {
  document.getElementById("carousel-form").classList.remove("d-none");
  document.getElementById("intro").classList.add("d-none");
});

document.querySelectorAll("input[type=radio]").forEach(radio => {
  radio.addEventListener("click", () => {
    const answer = radio.getAttribute("data-value");
    if (answer == "correct") {
      radio.nextElementSibling.classList.add("correct");
      if (radio.name !== "finalQuestion") {
        setTimeout(() => {
          nextBtn.click();
        }, "300");
      } else {
        submitBtn.classList.remove("d-none");
      }
    } else {
      radio.nextElementSibling.classList.add("incorrect");
    }
  });
});

submitBtn.addEventListener("click", () => {
  document.getElementById("carousel-form").classList.add("d-none");
  document.getElementById("intro").classList.remove("d-none");
  submitBtn.classList.add("d-none");
  document.querySelectorAll("input[type=radio]").forEach(radio => {
    radio.nextElementSibling.classList.remove("incorrect");
    radio.nextElementSibling.classList.remove("correct");
  });
  carousel.to(0);
});

continueBtn.addEventListener("click", () => {
  document.getElementById("modal-body-first").classList.add("d-none");
  document.getElementById("modal-body-next").classList.remove("d-none");
  continueBtn.classList.add("d-none");
  prevBtn.classList.remove("d-none");
});

prevBtn.addEventListener("click", () => {
  document.getElementById("modal-body-first").classList.remove("d-none");
  document.getElementById("modal-body-next").classList.add("d-none");
  continueBtn.classList.remove("d-none");
  prevBtn.classList.add("d-none");
});

var myModalEl = document.getElementById("exampleModal");
myModalEl.addEventListener("hidden.bs.modal", function (event) {
  document.getElementById("modal-body-first").classList.remove("d-none");
  document.getElementById("modal-body-next").classList.add("d-none");
  continueBtn.classList.remove("d-none");
  prevBtn.classList.add("d-none");
});
