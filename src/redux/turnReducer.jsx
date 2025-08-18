import {PLAYERX, PLAYER0} from '../constants/constants';


export default function turnReducer(state = PLAYERX, action) {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return action.payload.turn;
        case "PLAY_POSITION":
            return action.payload.turn === PLAYERX ? PLAYER0 : PLAYERX;
        case "RESET":
            return PLAYERX;
        default:
            return state;
    }
}