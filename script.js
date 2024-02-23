const tempoDisplay = document.getElementsByClassName('tempo');
const tempoText = document.getElementsByClassName('tempo-text');
const decreaseTempoBtn = document.getElementsByClassName('decrease-tempo');
const increaseTempoBtn = document.getElementsByClassName('increase-tempo')
const tempoSlider = document.getElementsByClassName('slider');
const startStopBtn = document.getElementsByClassName('slider');
const subtractBeats = document.getElementsByClassName('subtract-beats');
const addBeats = document.getElementsByClassName('add-beats');
const measureCount = document.getElementsByClassName('measure-count');


//valores iniciais
let bpm = 140;
let beatsPerMeasure = 4;
