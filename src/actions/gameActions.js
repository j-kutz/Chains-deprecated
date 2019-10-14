import { START_NEW_GAME } from './actionTypes';

export const startNewGame = (courseNAme, numOFHoles, Players) => ({
    type: START_NEW_GAME,
    payload: {
        courseName: courseNAme, 
        numOfHoles: numOFHoles,
        players: Players,
    }
});