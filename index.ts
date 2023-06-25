// Import stylesheets
import './style.css';
import Instructions from './instructions.ts';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `
<h1>javascript-developer-interview-challenge</h1>

<div>
  <div>
  ${Instructions}
  </div>

  <div>
  create button here
  </div>
</div>
`;
