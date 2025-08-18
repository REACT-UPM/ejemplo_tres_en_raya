import {PLAYERX, VALUES} from '../constants/constants';
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { legacy_createStore } from 'redux';

import React from 'react';
import App from '../App';

export default function ReduxProvider() {
    return (
        <Provider store={legacy_createStore(GlobalState, {values: VALUES, turn: PLAYERX, moves: 0})}>
            <App />
        </Provider>
    );
}