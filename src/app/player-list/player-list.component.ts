import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  players: Player[] = [];

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
    //this.playerService.getPlayers().subscribe((players) => this.players = players);
  }

  saveName(id: number, value: string) {
    this.playerService.updatePlayerName(id, value);
  }

  addNewPlayer() {
    this.playerService.addNewPlayer();
  }

  ngOnInit(): void {
    this.getPlayers();
  }

}
