function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let colorBtn = document.querySelector(".change-color");
let docBody = document.querySelector("body");
let spanColor = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  docBody.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = docBody.style.backgroundColor;
});
