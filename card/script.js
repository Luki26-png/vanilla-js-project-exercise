const listOfReviewer = [
    {
        "name" : "Jason Bolo Bolo",
        "index" : 0,
        "portraitLink" : "images/Group 1.png",
        "job" : "Web Developer",
        "reviewText" : "<span id=\"quote\">\"</span>" + 
                       "Lorem ipsum dolor sit amet consectetur adipisicing elit. " +
                       "Possimus facilis fuga voluptatum, consequuntur odio provident " +
                       "git commodi earum debitis maxime natus saepe officia quam porro " + 
                       "rem cupiditate expedita autem nulla." + 
                       "<span id=\"quote\">\"</span>"
    },
    {
        "name" : "Ujang ngangak",
        "index" : 1,
        "portraitLink" : "images/Group 2.png",
        "job" : "Maling Buah",
        "reviewText" : "<span id=\"quote\">\"</span>" +
                       "Wrote water woman of heart it total other. " +
                       "By in entirely securing suitable graceful at families improved. " +
                       "Zealously few furniture repulsive was agreeable consisted difficult " + 
                       "Collected breakfast estimable questions in to favourite it" +
                       "<span id=\"quote\">\"</span>"

    },
    {
        "name" : "Saya Orang",
        "index" : 2,
        "portraitLink" : "images/jason-bolo-bolo.png",
        "job" : "Kang Gibah",
        "reviewText" : "<span id=\"quote\">\"</span>" +
                       "One advanced diverted domestic sex repeated bringing you old. " +
                       "Enjoyed minutes related as at on on Is fanny dried as often me " +
                       "Gravity he mr sixteen esteems " +
                       "Finished no horrible blessing landlord dwelling dissuade if" +
                       "<span id=\"quote\">\"</span>"

    },
    {
        "name" : "No Kepo Kepo",
        "index" : 3,
        "portraitLink" : "images/Group 4.png",
        "job" : "Pelakor",
        "reviewText" : "<span id=\"quote\">\"</span>" +
                       "Was justice improve age article between " +
                       "No projection as up preference reasonably delightful celebrated " +
                       "Preserved and abilities assurance tolerably breakfast use saw " +
                       " Her rest west each spot his and you knew" +
                       "<span id=\"quote\">\"</span>"

    },
    {
        "name" : "Odading Mang",
        "index" : 4,
        "portraitLink" : "images/Group 5.png",
        "job" : "Kang Reviewer",
        "reviewText" : "<span id=\"quote\">\"</span>" +
                       "Am of mr friendly by strongly peculiar juvenile. " +
                       "Unpleasant it sufficient simplicity am by friendship no inhabiting " +
                       "Goodness doubtful material has denoting suitable she two " +
                       "He otherwise me incommode explained so in remaining" +
                       "<span id=\"quote\">\"</span>"

    }
];

let toButton = document.querySelector("#btn");
let toArrowRight = document.querySelector("#arrow-right");
let toArrowLeft = document.querySelector("#arrow-left");
let toReviewText = document.querySelector("#review-text");
let toJobText = document.querySelector("#job");
let toNameText = document.querySelector("#name");
let toPortraitImg = document.querySelector("#portrait-img");
var theIndex = 0;

const arrowRightClicked = () => {
    theIndex = listOfReviewer[theIndex].index + 1;
    if(theIndex > 4){
        theIndex = 0;
    }
    toPortraitImg.src = listOfReviewer[theIndex].portraitLink;
    toNameText.textContent = listOfReviewer[theIndex].name;
    toJobText.textContent = listOfReviewer[theIndex].job;
    toReviewText.innerHTML = listOfReviewer[theIndex].reviewText
}

const arrowLeftClicked = () => {
    theIndex = listOfReviewer[theIndex].index - 1;
    if(theIndex < 0){
        theIndex = 4;
    }
    toPortraitImg.src = listOfReviewer[theIndex].portraitLink;
    toNameText.textContent = listOfReviewer[theIndex].name;
    toJobText.textContent = listOfReviewer[theIndex].job;
    toReviewText.innerHTML = listOfReviewer[theIndex].reviewText
}

const createRandomNumber = () => {
    let theNumber = Math.random() * 5;
    let flooredNumber = Math.floor(theNumber);
    return flooredNumber;
}

const buttonClicked = () => {
    theIndex = createRandomNumber();

    toPortraitImg.src = listOfReviewer[theIndex].portraitLink;
    toNameText.textContent = listOfReviewer[theIndex].name;
    toJobText.textContent = listOfReviewer[theIndex].job;
    toReviewText.innerHTML = listOfReviewer[theIndex].reviewText
}

toArrowRight.addEventListener("click",arrowRightClicked);
toArrowLeft.addEventListener("click",arrowLeftClicked);
toButton.addEventListener("click",buttonClicked);