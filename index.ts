// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My App';
document.getElementById('app.title').innerHTML = title;
let counter: number = 0;
let ciclo: number = 0;
let descanso: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;

  if (counter == 20) {
    descanso = descanso + 1;
    counter = 0;
    if (descanso == 10) {
      ciclo = ciclo + 1;
      descanso = 0;
      if (ciclo == 8) {
        ciclo = 0;
      }
    }
  }

  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();
}, 100);
