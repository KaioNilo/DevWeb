"use strict";
function useState() {
    let state;
    function getState() {
        return state;
    }
    ;
    function setState(newState) {
        state = newState;
    }
    ;
    return { getState, setState };
}
;
const newState = useState();
newState.setState('kaio');
console.log(newState.getState());
