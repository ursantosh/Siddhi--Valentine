const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let step = 0;

yesBtn.addEventListener("click", () => {
  if (step === 0) {
    question.innerText = "Do you like me, Siddhi? 💕";
    subtext.innerText = "Be honest…";
    step++;
  } else if (step === 1) {
    question.innerText = "Will you be my Valentine? 🌹";
    subtext.innerText = "This is my heart talking ❤️";
    step++;
  } else {
    question.innerText = "YAYYYY!!! 🥰💞";
    subtext.innerText = "You just made my day, Siddhi.\n— insight of jade ✨";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    startHearts();
  }
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 300);
}
