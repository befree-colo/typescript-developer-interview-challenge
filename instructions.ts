const Instructions = `

<h3 style="margin-top: 0;">Requirements</h3>

<ol>
  <li>Fix the "Workspace" button so it correctly routes to the Workspace component.
    <p>
        Bonus: Use lazy loading
    </p>
  </li>
  <li>Build a timer in the Workspace component. When first loading the component, the timer shall be in an “initial” state:<br/>
    <a class="button call-button answer-button">
      <i class="material-icons" style="color: white;">call</i>
    </a>
  
    <div class="expected-style-header">Expected Style</div>
    <table class="styles-table">
      <tr><th>Background</th><td>#5EA100</td></tr>
      <tr><th>Text Color</th><td>#FFFFFF</td></tr>
      <tr><th>Icon</th><td>&lt;i class="material-icons"&gt;call&lt;/i&gt;</td></tr>
    </table>  
</li>
<li>When clicking the timer button it should start counting up from 00:00 with a precision of one second. Use RxJS instead of setTimeout.<br/><br/>
    <a class="button call-button hangup-button">
          <div
            style="display: flex; align-items: center; justify-content: center;"
          >
            <i
              class="material-icons"
              style="color: white; transform: rotate(-225deg); position: relative; top: 2px;"
              >call</i
            >
            <span
              style="margin-left: 1rem; color: white; justify-content: right"
              >00:00</span
            >
          </div>
        </a>

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
