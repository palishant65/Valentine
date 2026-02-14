let slides = document.querySelectorAll(".slide");
let current = 0;
let correctPassword = "18072024";

function login(){
let pass = document.getElementById("password").value;
if(pass === correctPassword){
slides[0].classList.remove("active");
slides[1].classList.add("active");
document.getElementById("bgMusic").play();
startHearts();
startAutoSlide();
}
else{
alert("Wrong Date ❤️");
}
}

function startAutoSlide(){
setInterval(()=>{
slides[current].classList.remove("active");
current++;
if(current >= slides.length){
current = slides.length - 1;
}
slides[current].classList.add("active");
},8000);
}

function startHearts(){
setInterval(()=>{
let heart = document.createElement("div");
heart.innerHTML = "❤️";
heart.className = "heart";
heart.style.left = Math.random()*100 + "vw";
heart.style.fontSize = (Math.random()*20+15) + "px";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),6000);
},600);
}

function showSecret(){
document.getElementById("secret").style.display = "block";
}

document.addEventListener("mousemove",e=>{
let s = document.createElement("div");
s.className = "sparkle";
s.style.left = e.clientX + "px";
s.style.top = e.clientY + "px";
document.body.appendChild(s);
setTimeout(()=>s.remove(),800);
});