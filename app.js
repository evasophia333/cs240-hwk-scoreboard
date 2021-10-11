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

let addition = node1.innerHTML + node2.innerHTML + node3.innerHTML + node4.innerHTML + node5.innerHTML + node6.innerHTML + node7.innerHTML;
node1.innerHTML = 1;
node2.innerHTML = 2;

result.innerHTML = parseInt(node1.innerHTML) + parseInt(node2.innerHTML);


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

function playAudio(random) {
    new Audio(random).play();
    if (random == 'chickendance.mp3') {
        changeImageChicken();
    } else {
        changeImage();
    }
}



function changeImageChicken() {
    var img = document.getElementById('image');
    img.src = 'sdchicken.jpg';
}
function changeImage() {
    var img = document.getElementById('image');
    img.src = 'megaphone.png';
}

