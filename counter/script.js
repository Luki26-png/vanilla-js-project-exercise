let counterValue = document.querySelector("#counter-number");
let decreaseButton = document.getElementById("button-decrease");
let resetButton = document.getElementById("button-reset");
let increaseButton = document.getElementById("button-increase");

const changeColor = (passedValue) => {
    if(passedValue > 0){
        counterValue.style.color = "green";
    }else if(passedValue < 0){
        counterValue.style.color = "red";
    }else{
        counterValue.style.color = "blue";
    }
}

const counterIncrease = () => {
    let convertToNumber = Number(counterValue.textContent);
    let newValue = convertToNumber + 1;
    counterValue.textContent = newValue.toString();
    changeColor(newValue);
}

const counterDecrease = () => {
    let convertToNumber = Number(counterValue.textContent);
    let newValue = convertToNumber - 1;
    counterValue.textContent = newValue.toString();
    changeColor(newValue);
}

const counterReset = () => {
    let newValue = 0;
    counterValue.textContent = newValue.toString();
    changeColor(newValue);
}

increaseButton.addEventListener("click",counterIncrease);
decreaseButton.addEventListener("click",counterDecrease);
resetButton.addEventListener("click",counterReset);