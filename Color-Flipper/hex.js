const hexSymbol = ["0","1","2","3","4","5","6","7",
                  "8","9","a","b","c","d","e","f"];

/* function to get random number */
const getRandomNumber = ()=>{
    let initialNumber = Math.random() * 16;
    return Math.floor(initialNumber);
} 
/** function to generate hex value */
const getHexCode = () => {
    let hexColor = "#";
    for(let i = 0;i < 6;i++){
        let forIndex = getRandomNumber();
        hexColor += hexSymbol[forIndex];
    }
    return hexColor;
}

let backColor = document.querySelector("#container");
let colorIndicator = document.querySelector("#color");
let theButton = document.querySelector("#btn");

var changeColor = () =>{
    let getHex = getHexCode()
    backColor.style.backgroundColor = getHex;
    colorIndicator.textContent =  getHex;
}
theButton.addEventListener("click",changeColor)




