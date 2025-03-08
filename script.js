import confetti from "https://cdn.skypack.dev/canvas-confetti";
const doItNow = (evt, hard) => {
  const direction = Math.sign(lastX - evt.clientX);
  lastX = evt.clientX;
  const particleCount = hard ? r(122, 245) : r(2, 15);
  confetti({
    particleCount,
    angle: r(90, 90 + direction * 30),
    spread: r(45, 80),
    origin: {
      x: evt.clientX / window.innerWidth,
      y: evt.clientY / window.innerHeight
    }
  });
};
const doIt = (evt) => {
  doItNow(evt, false);
};

const doItHard = (evt) => {
  doItNow(evt, true);
};

let lastX = 0;
const butt = document.querySelector("button");
butt.addEventListener("mousemove", doIt);
butt.addEventListener("click", doItHard);
document.body.addEventListener("touchmove", handleTouchMove);
document.body.addEventListener("mousemove", handleMouseMove);

function r(mi, ma) {
  return parseInt(Math.random() * (ma - mi) + mi);
}

function handleTouchMove(evt) {
  const touch = evt.touches[0];
  doItNow({ clientX: touch.clientX, clientY: touch.clientY }, false);
}

function handleMouseMove(evt) {
  doItNow(evt, false);
}

function doItNow(evt, hard) {
  const direction = Math.sign(lastX - evt.clientX);
  lastX = evt.clientX;
  const particleCount = hard ? r(122, 245) : r(2, 15);
  confetti({
    particleCount,
    angle: r(90, 90 + direction * 30),
    spread: r(45, 80),
    origin: {
      x: evt.clientX / window.innerWidth,
      y: evt.clientY / window.innerHeight
    }
  });
}

function doIt(evt) {
  doItNow(evt, false);
}

function doItHard(evt) {
  doItNow(evt, true);
}

// Automatically call doIt and doItHard functions for 10 seconds
function autoRun() {
  const interval = setInterval(() => {
    doIt();
    doItHard();
  }, 100); // Adjust the interval time as needed

  setTimeout(() => {
    clearInterval(interval);
    console.log("Auto-run stopped after 10 seconds.");
  }, 10000); // 10 seconds
}

// Start the auto-run
autoRun();

// script.js
const slider = document.querySelector('.slider');
let angle = 0;

// Rotate manually using left and right arrow keys
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    angle -= 60; // Rotate clockwise
  } else if (e.key === 'ArrowLeft') {
    angle += 60; // Rotate counter-clockwise
  }
  slider.style.transform = `rotateY(${angle}deg)`;
});

