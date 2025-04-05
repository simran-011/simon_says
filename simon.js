let gameseq = [];
let userseq = [];
let colors = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("started");
    started = true;
  }
  levelUp();
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  userseq = [];  
  level++;
  h2.innerText = `Level ${level}`;

  // random index from colors array is being choosed...
  let random = Math.floor(Math.random() * 3);
  let ranColor = colors[random];
  // div is being selected for that class of random color....
  let ranBtn = document.querySelector(`.${ranColor}`);
  // console.log(random);
  // console.log(ranColor);
  // console.log(ranBtn);
  gameseq.push(ranColor);
  console.log(gameseq);
  btnFlash(ranBtn);
}

function checkAns(idx) {
  
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `game over! your score was <b>${level}</b> <br> press any key to start it again`;
    document.querySelector("body").style.backgroundColor = "red"
    setTimeout(function() {
        document.querySelector("body").style.backgroundColor = "white" 
    },150);
    reset();
  }
}

function userPress() {
  let btn = this;

  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  console.log(userColor);
  userseq.push(userColor);
  checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", userPress);
}

function reset() {
    started = false;
    level = 0;
    gameseq = [];
    userseq = [];

}
