const wheel = document.querySelector(".wheel");
const button = document.querySelector(".button");
let deg = 0;

button.addEventListener("click", () => {
  button.style.pointerEvents = "none";
  deg = Math.floor(3600 + Math.random() * 360);
  wheel.style.transition = "all 10s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.classList.add("blur-animation");
});

wheel.addEventListener("transitionend", () => {
  wheel.classList.remove("blur-animation");
  wheel.style.transition = "none";
  wheel.style.transform = `rotate(${deg % 360}deg)`;
  button.style.pointerEvents = "auto";
});
