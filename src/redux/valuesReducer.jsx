import { PLAYERX, PLAYER0, VALUES } from "../constants/constants";

export default function valuesReducer(state = VALUES, action) {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return action.payload.values;
        case "PLAY_POSITION":
            let newValue = action.payload.turn === PLAYERX ? 'X' : 'O';
            let newState = JSON.parse(JSON.stringify(state));
            newState[action.payload.row][action.payload.column] = newValue;
            return newState;
        case "RESET":
            return VALUES;
        default:
            return state;
    }
}