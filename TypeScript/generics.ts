type numOrStr = number | string;


function useState <S extends numOrStr = string> () {
    let state: S;

    function getState() {
        return state;
    };

    function setState(newState: S) {
        state = newState;
    };

    return { getState, setState };

};

const newState = useState();
newState.setState('kaio');

console.log(newState.getState());