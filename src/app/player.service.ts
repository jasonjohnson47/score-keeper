import { Injectable } from '@angular/core';
import { Player } from './Player';
import { defaultPlayers } from './default-players';
//import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  playersJson = localStorage.getItem('scoreKeeperPlayers');

  players = this.playersJson !== null
    ? JSON.parse(this.playersJson)
    : defaultPlayers;

  getPlayers(): Player[] {
    return this.players;
  }

  /*getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    return players;
  }*/

  savePlayers(): void {
    localStorage.setItem('scoreKeeperPlayers', JSON.stringify(this.players));
  }

  updatePlayerScore(id: number, score: string): void {
    this.players[id].score = score;
    this.savePlayers();
  }

}
