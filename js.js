const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');
const body = document.body;

let seconds = 0;
let timer = null;
let speed = 1000; // скорость (1 секунда по умолчанию)

function updateCounter() {
  let min = String(Math.floor(seconds / 60)).padStart(2, '0');
  let sec = String(seconds % 60).padStart(2, '0');
  counter.textContent = `${min}:${sec}`;
}

function startTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    seconds++;
    updateCounter();
  }, speed);
}

// speed +
plusBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'lightgreen';
  counter.style.color = 'lightcoral';
  speed = 500; // быстрее
  startTimer();
});

// speed -
minusBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'lightcoral';
  counter.style.color = 'lightgreen';
  speed = 2000; // медленнее
  startTimer();
});

// reset
resetBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'gray';
  counter.style.color = 'black';
  clearInterval(timer);
  seconds = 0;
  updateCounter();
});

// запуск начального состояния
updateCounter();
