const phoneCard = document.getElementById("phoneCard");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const liveClock = document.getElementById("liveClock");

if (musicBtn && bgMusic) {
  musicBtn.addEventListener("click", function () {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = "Pause";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "Play";
    }
  });
}

if (phoneCard) {
  document.addEventListener("mousemove", function (e) {
    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;

    phoneCard.style.animation = "none";
    phoneCard.style.transform = `rotateY(${-x}deg) rotateX(${y}deg) translateY(-8px)`;
  });

  document.addEventListener("mouseleave", function () {
    phoneCard.style.animation = "phoneFloat 6s infinite ease-in-out";
  });
}

document.addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);

  setTimeout(function () {
    ripple.remove();
  }, 900);
});

const revealItems = document.querySelectorAll(
  ".glass-section, .glass-card, .skill-card, .project-card, .social-card, .timeline-item"
);

revealItems.forEach(function (item) {
  item.classList.add("reveal");
});

function revealOnScroll() {
  revealItems.forEach(function (item) {
    const top = item.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      item.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

function updateClock() {
  if (!liveClock) return;

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  liveClock.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);