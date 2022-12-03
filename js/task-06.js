const numbersInput = document.querySelector("input");
let total = [];
const dataLength = numbersInput.getAttribute("data-length");
numbersInput.setAttribute("maxlength", dataLength);
numbersInput.addEventListener("input", () => {
    console.log(numbersInput.value);
    total.push(numbersInput.value);
    if (total.length === parseInt(dataLength)) {
        numbersInput.style.borderColor = "#4caf50";
    } else {
        numbersInput.style.borderColor = "#f44336";
    }
});

numbersInput.addEventListener("blur", () => {
   total = [];
   numbersInput.value = "";
});






