const character = document.getElementById("character");
const block = document.getElementById("block");
const obstacle = document.getElementById("obstacle");
const beaver1 = document.getElementById("beaver1");
const beaver2 = document.getElementById("beaver2");
const restart = document.getElementById("restart");
const motivation = document.getElementById("motivation");
const score = document.getElementById("score");
const results = document.getElementById("results");
let run = true;
let time=0;

const images = ["plates.png", "db.png"];

const beaverStuff = ["No pain no gain",
"Pain is just weakness leaving the body",
"The grind doesn't sleep, neither do I",
"Just hit 0/2/3 on my big 3 lifts",
"Yeah I go four days a week",
"Abs are made in the kitchen brother",
"The gym is my therapy",
"Grip it and rip it, 405 easy man",
"Dude you're an absolute beast bro",
"Tired man, real tired"
]

const jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500)
}

let running = setInterval(() => {
  if(run){
    beaver1.style.display = "none";
    beaver2.style.display = "";
    run = false;
  }
  else{
    beaver1.style.display = "";
    beaver2.style.display = "none";
    run = true;
  }
}, 100)

const dog = () => {
  location.reload();
}

let checkDead = setInterval(() => {
  let characterTop = parseInt(window.getComputedStyle(character).
  getPropertyValue("top"));
  let blockLeft = parseInt(window.getComputedStyle(block).
  getPropertyValue("left"));
  if(blockLeft<250 && blockLeft>200 && characterTop>=200){
    let stuff = time;
    block.style.animation = "none";
    block.style.display = "none";
    character.style.display= "none";
    motivation.style.display = "none";
    score.style.display = "none"
    results.innerHTML="Score:<br>"+stuff;
    restart.style.display="";
    alert("Looks like you slept on the grind brotha!");
  }
}, 10)

let scoreFunction = setInterval(() => {
  score.innerHTML="Score<br>"+ time;
  time+=10;
}, 100)

const grind = () => {
  let index = Math.floor(Math.random()*10);
  motivation.innerHTML=beaverStuff[index];
}
