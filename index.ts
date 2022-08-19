// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My App';
document.getElementById('app.title').innerHTML = title;
let counter: number = 0;

for (let i = 0; i <= 8; i++) {
  let intervalId = setInterval(() => {
    counter = counter + 1;
    let counterDiv = document.getElementById('app.counter');
    counterDiv.innerHTML = counter.toString();
  }, 10000);
}
