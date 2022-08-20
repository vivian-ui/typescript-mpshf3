// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My App';
document.getElementById('app.title').innerHTML = title;
let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;

  if (counter == 20) {
    counter = 0;
  }

  let counterDiv = document.getElementById('app.counter');
  counterDiv.innerHTML = counter.toString();
}, 100);
