const colorCollection = ["red","green","tomato","skyblue",
                        "powderblue","silver","salmon"];
let backColor = document.querySelector("#container");
let colorName = document.querySelector("#color");
let theButton = document.querySelector("#btn");
const getRandomNumber = ()=>{
    let initialNumber =Math.floor(Math.random() * 7);
    return Math.floor(initialNumber);

}

var changeColorBehavior = ()=>{
    let forIndex = getRandomNumber();
    colorName.innerHTML = colorCollection[forIndex];
    backColor.style.backgroundColor = colorCollection[forIndex];
}
theButton.addEventListener("click",changeColorBehavior);


