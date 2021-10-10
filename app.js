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