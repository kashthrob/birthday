// Countdown to midnight
function startCountdown() {
    const countdown = document.getElementById("countdown");
    const now = new Date();
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0); // midnight
    const diff = nextMidnight - now;
  
    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  
    countdown.textContent = `Countdown to midnight: ${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(startCountdown, 1000);
  
  // Card modal toggle
  const openCardBtn = document.getElementById("openCardBtn");
  const closeCardBtn = document.getElementById("closeCardBtn");
  const cardModal = document.getElementById("cardModal");
  
  openCardBtn.addEventListener("click", () => {
    cardModal.classList.add("show");
  });
  
  document.getElementById("closeCardBtn").addEventListener("click", () => {
    cardModal.classList.remove("show");
  });
  
  // Close modal on background click
  cardModal.addEventListener("click", (e) => {
    if (e.target === cardModal) cardModal.classList.remove("show");
  });

  
//   const slides = [
//     "./images/r1.jpg",
//     "./images/r2.jpg",
//     "./images/r3.jpg",
//     "./images/r4.jpg"
//   ];
//   let current = 0;
//   setInterval(() => {
//     current = (current + 1) % slides.length;
//     document.getElementById("slide").src = slides[current];
//   }, 3000);
  
const slides = [
    "./images/p1.jpg",
    "./images/p2.jpg",
    "./images/p3.jpg",
    "./images/p4.jpg"
  ];
  
  let current = 0;
  const slideEl = document.getElementById("slide");
  
  setInterval(() => {
    current = (current + 1) % slides.length;
    slideEl.style.opacity = 0;
    setTimeout(() => {
      slideEl.src = slides[current];
      slideEl.style.opacity = 1;
    }, 500);
  }, 3000);
  


  const message = "Wishing You the Happiest Birthday Ever! 🎂🎉";
  let i = 0;
  const speed = 100; // typing speed in ms
  
  function typeWriter() {
    if (i < message.length) {
      document.getElementById("birthday-message").innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  
  document.addEventListener("DOMContentLoaded", typeWriter);
  
