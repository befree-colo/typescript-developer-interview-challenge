import './instructions.css';

const Instructions = `

<h5 style="margin: 0.5rem 0">User Story: As a user, I need a stopwatch in order to time how long it takes me to perform tasks.</h5>
<ol>Acceptance Criteria:
<li>Build a stopwatch in workspace.js. The output is displayed on the right panel.</li>
<li>When first loading the page, the stopwatch should be in an “initial” state:<br/>
  <div class="stopwatch">
    <div class="time">00:00</div>
    <a class="button button--start">
      <i class="material-icons" style="color: white;">play_arrow</i>
    </a>
  </div>

  <div class="expected-style-header">Expected Style</div>
  <table class="styles-table">
    <tr><th>Background</th><td>#5EA100</td></tr>
    <tr><th>Text Color</th><td>#FFFFFF</td></tr>
    <tr><th>Width</th><td>100px</td></tr>
    <tr><th>Icon</th><td>&lt;i class="material-icons"&gt;play_arrow&lt;/i&gt;</td></tr>
  </table>  
</li>
<li>When clicking the timer button it should start counting up from 00:00 with a precision of one second. Use RxJS instead of setTimeout.<br/><br/>
  <div class="stopwatch">    
  <div class="time">00:00</div>
  <a class="button button-stop">
    <i
      class="material-icons"
      style="color: white;"
      >stop</i
    >
</a>  
  </div>
  <div class="expected-style-header">Expected Style</div>
  <table class="styles-table">
    <tr><th>Rotation of phone icon</th><td>-225deg</td></tr>
    <tr><th>Background</th><td>#aa2222</td></tr>
  </table>
</li>
<li>The timer shall continue counting up until clicking the button again at which point it should return to the “initial” state.
</li>
<li>When clicking the button again the timer should reset back to its initial state.
</li>
</ol>
`;

export default Instructions;
