const rangeNum = document.querySelector("#font-size-control");
const textToManipulate = document.querySelector("#text");
rangeNum.addEventListener("input", () => {
    let valueInPx = rangeNum.value+"px";
    textToManipulate.style.fontSize = valueInPx;

});
