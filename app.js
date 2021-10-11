/**
 * Scoreboard Homework
 * @author 
 */

let node1 = document.querySelector('.top1');  // select the element 
let node2 = document.querySelector('.top2');  // select the element 
let node3 = document.querySelector('.top3');  // select the element 
let node4 = document.querySelector('.top4');  // select the element 
let node5 = document.querySelector('.top5');  // select the element 
let node6 = document.querySelector('.top6');  // select the element 
let node7 = document.querySelector('.top7');  // select the element 
let result = document.querySelector('.top8');  // select the element 
let bottom1 = document.querySelector('.bottom1');  // select the element 
let bottom2 = document.querySelector('.bottom2');  // select the element 
let bottom3 = document.querySelector('.bottom3');  // select the element 
let bottom4 = document.querySelector('.bottom4');  // select the element 
let bottom5 = document.querySelector('.bottom5');  // select the element 
let bottom6 = document.querySelector('.bottom6');  // select the element 
let bottom7 = document.querySelector('.bottom7');  // select the element 
let bottomresult = document.querySelector('.bottom8');  // select the element 

let addition = node1.innerHTML + node2.innerHTML + node3.innerHTML + node4.innerHTML + node5.innerHTML + node6.innerHTML + node7.innerHTML;
node1.innerHTML = 1;
node2.innerHTML = 2;
bottom1.innerHTML = 3;

result.innerHTML = parseInt(node1.innerHTML) + parseInt(node2.innerHTML) + parseInt(node3.innerHTML) + parseInt(node4.innerHTML) + parseInt(node5.innerHTML) + parseInt(node6.innerHTML) + parseInt(node7.innerHTML);
bottomresult.innerHTML = parseInt(bottom1.innerHTML) + parseInt(bottom2.innerHTML) + parseInt(bottom3.innerHTML) + parseInt(bottom4.innerHTML) + parseInt(bottom5.innerHTML) + parseInt(bottom6.innerHTML) + parseInt(bottom7.innerHTML);

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

