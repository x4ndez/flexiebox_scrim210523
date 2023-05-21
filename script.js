//  >>> GET WIDTH AND HEIGHT OF USER'S SCREEN

var vpH = screen.availHeight;
var vpW = screen.availWidth;

//  >>>  SET WIDTH AND HEIGHT OF FLEXBOX

const containerL1 = document.querySelector(".container-l1");

containerL1.style.height = vpH*2;
containerL1.style.width = vpW*2;

//  >>>  SET WIDTH AND HEIGHT OF BOXES IN FLEXBOX

const containerL2 = document.querySelectorAll(".container-l2");

for(let i = 0; i < containerL2.length; i++) {

    containerL2[i].style.height = vpH;
    containerL2[i].style.width = vpW;

}

//  >>> SNAP TO ITEMS

const itemp1 = document.querySelector("#p1");
const itemp2 = document.querySelector("#p2");
const itemp3 = document.querySelector("#p3");
const itemp4 = document.querySelector("#p4");

itemp1.addEventListener("click", snapToP2);

function snapToP2() {

   window.scrollTo(vpW+1, 0);

}

itemp2.addEventListener("click", snapToP3);

function snapToP3() {

   window.scrollTo(0, vpH+1);

}

itemp3.addEventListener("click", snapToP4);

function snapToP4() {

   window.scrollTo(vpW+1, vpH+1);

}

itemp4.addEventListener("click", snapToP1);

function snapToP1() {

   window.scrollTo(0, 0);

}