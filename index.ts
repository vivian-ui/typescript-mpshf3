// Import stylesheets
import './style.css';

// Write TypeScript code!
let title: string = 'My App';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<hr>
<p>paragrafo</p>
`;
console.log('Ola mundo');
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
