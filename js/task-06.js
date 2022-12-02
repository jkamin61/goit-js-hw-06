const numbersInput = document.querySelector("input");
let total = [];

numbersInput.addEventListener("input", () => {
    total.push(numbersInput.textContent);
    console.log(total.length);
});

numbersInput.addEventListener("focus", () => {
   total = [];
});

numbersInput.addEventListener("blur", () =>{
    if (total.length > 6) {
        numbersInput.style.borderColor = "#4caf50";
    } else {
        numbersInput.style.borderColor = "#f44336";
    }
    numbersInput.value = "";
});

