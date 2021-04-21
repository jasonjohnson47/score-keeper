import { Player } from './Player';

const defaultPlayers: Player[] = [
    { id: 0, name: 'Player 1', score: 0 },
    { id: 1, name: 'Player 2', score: 0 }
];

const playersJson = localStorage.getItem('scoreKeeperPlayers');

export const PLAYERS = playersJson !== null
    ? JSON.parse(playersJson)
    : defaultPlayers;

localStorage.setItem('scoreKeeperPlayers', JSON.stringify(PLAYERS));