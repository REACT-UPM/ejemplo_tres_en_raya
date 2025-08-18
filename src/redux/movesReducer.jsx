
export default function movesReducer(state = 0, action) {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return action.payload.moves;
        case 'PLAY_POSITION':
            return state + 1;
        case 'RESET':
            return 0;
        default:
            return state;
        }
}
