const tempoDisplay = document.querySelector('.tempo');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

let contagem = 3; // tics
let contador = 0; // onde está a batida
let taRodando = false;
let intervalID;
let bpm = 140;

decreaseTempoBtn.addEventListener('click', decreaseTempo);
increaseTempoBtn.addEventListener('click', increaseTempo);
tempoSlider.addEventListener('input', tempoSlide);
startStopBtn.addEventListener('click', start);

function decreaseTempo() {
  if(bpm <= 20) return;
  bpm--;
  updateMetronome();
}

function increaseTempo() {
  if(bpm >= 280) return;
  bpm++;
  updateMetronome();
}

function tempoSlide() {
  bpm = tempoSlider.value;
  updateMetronome();
}

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;
  clearInterval(intervalID);
  if (taRodando) {
    intervalID = setInterval(play, 60000 / bpm);
  }

}

function start() {
  if (!taRodando) {
    intervalID = setInterval(play, 60000 / bpm);
    taRodando = true;
    startStopBtn.textContent = 'STOP';
  } else {
    startStopBtn.textContent = 'START';
    taRodando = false;
    clearInterval(intervalID);
    contador = 0; 
  }
}

function play() {
  if (contador < contagem) {
    click1.play();
    contador++;
    console.log(contador);
  } else {
    click2.play();
    contador = 0;
    console.log(contador);
  }
}
