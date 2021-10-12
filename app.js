/**
 * Scoreboard Homework
 * @author Eva Sophia Shimanski
 */

/**
 * determines a random song name
 * @returns name of the song 
 */
function randomurl() {
    var randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        return 'buildup.mp3';
    } else if (randomNum == 1) {
        return 'charge1.mp3';
    } else if (randomNum == 2) {
        return 'charge2.mp3';
    }
}

var random = randomurl();
/**
 * plays the random song name
 * @param {} random 
 */
function playAudio(random) {
    new Audio(random).play();
    if (random == 'chickendance.mp3') {
        changeImageChicken();
    } else {
        changeImage();
    }
}
/**
 * changes the image to the chicken
 */
function changeImageChicken() {
    var img = document.getElementById('image');
    img.src = 'sdchicken.jpg';
}
/**
 * changes the image to the cheer!
 */
function changeImage() {
    var img = document.getElementById('image');
    img.src = 'megaphone.png';
}

/**
 * Keeps track of which team was selected
 */
var selection = document.querySelector('select');
let result = 'AWAY'
selection.addEventListener('change', function (evt) {
    result = selection.options[selection.selectedIndex].text;
});


/**
 * Keeps track of which inning was selected
*/
var inning = document.querySelector('#Inning');
let resultInning = 1;
inning.addEventListener('change', function (evt) {
    resultInning = inning.options[inning.selectedIndex].text;
});


/**
 * Determines the score and upates it in the table 
 */
let score = 0;
let spot = '#HOME1'
let buttonPlusNode = document.querySelector("#plus"); //increases the score by one
buttonPlusNode.addEventListener("click", function (evt) {
    spot = '#' + result + resultInning;
    let currentSpot = document.querySelector(spot);
    let value = parseInt(currentSpot.innerHTML);
    currentSpot.innerHTML = "" + (value + 1);
    let r = '#' + result + '8';
    currentSpot = document.querySelector(r);
    value = parseInt(currentSpot.innerHTML);
    currentSpot.innerHTML = "" + (value + 1);
});

let buttonMinusNode = document.querySelector("#minus"); //decreases the score by one but doesnt become negative
buttonMinusNode.addEventListener("click", function () {
    spot = '#' + result + resultInning;
    let currentSpot = document.querySelector(spot);
    let value = parseInt(currentSpot.innerHTML);
    let r = '#' + result + '8';
    let resultspot = document.querySelector(r);
    let resultvalue = parseInt(resultspot.innerHTML);
    if (value >= 1) {
        currentSpot.innerHTML = "" + (value - 1);
        resultspot.innerHTML = (resultvalue - 1);
    } else {
        currentSpot.innerHTML = 0;
    }
});


