import { Injectable } from '@angular/core';
import { Player } from './Player';
import { PLAYERS } from './mock-players';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers(): Observable<Player[]> {
    const players = of(PLAYERS);
    return players;
  }

}
