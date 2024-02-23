const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');


let bpm = 140;
let beatsPerMeasure = 4;

decreaseTempoBtn.addEventListener('click', decreaseTempo);
increaseTempoBtn.addEventListener('click', increaseTempo);
tempoSlider.addEventListener('input', tempoSlide);



function decreaseTempo() {
  if(bpm <= 20 ){ return }
  bpm--;
  updateMetronome();
  
}

function increaseTempo() {
  if(bpm >= 280 ){ return }
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
}

