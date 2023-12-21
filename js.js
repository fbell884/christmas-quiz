const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("start");
const submitBtn = document.getElementById("submit-btn");

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

// submitBtn.addEventListener("click", () => {
//   alert("You Win!");
// });
