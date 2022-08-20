// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My App';
document.getElementById('app.title').innerHTML = title;
let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;

  if (counter == 21) {
    counter = 1;
  }

  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();
}, 100);
