const initialState = {
    boardSize: 10,
    bombCount: 20,
    bombsRemaining: 20,
    bombSpots: [],
    revealedSpots: [],
    board: [],
    startOver: false,
    isPlaying: true,
    time: 0,
    win: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "createBoard":
            console.log("done loading");
            return {
                ...state,
                board: action.payload,
            };
        case "createBombSpots":
            return {
                ...state,
                bombSpots: action.payload,
            };
        case "changeBombCount":
            return {
                ...state,
                bombsRemaining: state.bombsRemaining + action.payload,
            };
        case "revealSpots":
            return {
                ...state,
                revealedSpots: [
                    ...state.revealedSpots,
                    ...action.payload.filter((num) =>
                        state.revealedSpots.includes(num) ? null : num
                    ),
                ],
            };
        case "incrementTimer":
            return {
                ...state,
                time: state.time + 1,
            };
        case "loading":
            console.log("loading");
            return {
                ...state,
                isLoading: true,
            };
        case "checkWin":
            if (
                state.bombsRemaining === 0 &&
                state.revealedSpots.length ===
                state.boardSize ** 2 - state.bombCount
            ) {
                clearInterval(state.timerID);
                return {
                    ...state,
                    win: true,
                    isPlaying: false,
                    timerID: null,
                };
            }
            return { ...state };
        case "gameOver":
            clearInterval(state.timerID);
            return {
                ...state,
                isPlaying: false,
                timerID: null,
            };
        case "startOver":
            return {
                ...initialState,
                startOver: !state.startOver,
            };
        default:
            throw new Error("Unknown Action");
    }
}

export { initialState, reducer }