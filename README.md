# javascript-developer-interview-challenge

## Requirements

1.  Fix the "Workspace" button so it correctly routes to the Workspace component.

        Bonus: Use lazy loading

2.  Build a timer in the Workspace component. When first loading the component, the timer shall be in an “initial” state:
    ![Initial button state](docs/images/initial_button_state.png)

    #### Expected Style

              Background: #5EA100
              Text Color: #FFFFFF
              Icon: <i class="material-icons">call</i>

3.  When clicking the timer button it should start counting up from 00:00 with a precision of one second. Use RxJS instead of setTimeout.
    ![Running button state](docs/images/running_button_state.png)

    #### Expected Style

          Rotation of phone icon: -225deg
          Background: #aa2222

4.  The timer shall continue counting up until clicking the button again at which point it should return to the “initial” state.

5.  When clicking the button again the timer should reset back to its initial state.
