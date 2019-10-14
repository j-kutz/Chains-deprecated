import { START_NEW_GAME } from '../actions/actionTypes';
import produce from 'immer';

const initialState = {
    courseName: '',
    numOfHoles: 0,
    players: [],
}

export default function(state = initialState, action) {
    switch (action.type) {
        case START_NEW_GAME: 
            return produce(state, draft => {
                draft.courseName = action.payload.courseName;
                draft.numOfHoles = action.payload.numOfHoles;
                draft.players = action.payload.players;
            })
        default:
            return state;
    }
}