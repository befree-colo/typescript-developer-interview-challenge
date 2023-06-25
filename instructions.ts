const Instructions = `

<h3>Requirements</h3>

<ol>
  <li>Fix the "Workspace" button so it correctly routes to the Workspace component.
    <p>
        Bonus: Use lazy loading
    </p>
  </li>
  <li>Build a timer in the Workspace component. When first loading the component, the timer shall be in an “initial” state:<br/>
    <div class="initial-button-state">hi</div>
    <img src="assets/initial_button_state.svg">

    <p>
      <h4>Expected Style</h4>

              Background: #5EA100<br/>
              Text Color: #FFFFFF<br/>
              Icon: &lt;i class="material-icons"&gt;call&lt;/i&gt;<br/>
    </p>
</li>
<li>When clicking the timer button it should start counting up from 00:00 with a precision of one second. Use RxJS instead of setTimeout.
    ![Running button state](docs/images/running_button_state.png)

    #### Expected Style

          Rotation of phone icon: -225deg
          Background: #aa2222
</li>
<li>The timer shall continue counting up until clicking the button again at which point it should return to the “initial” state.
</li>
<li>When clicking the button again the timer should reset back to its initial state.
</li>
</ol>
`;

export default Instructions;
