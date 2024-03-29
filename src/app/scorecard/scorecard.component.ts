import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  players: Player[] = [];

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
    //this.playerService.getPlayers().subscribe((players) => this.players = players);
  }

  saveScore(id: number, value: string) {
    this.playerService.updatePlayerScore(id, value);
  }

  ngOnInit(): void {
    this.getPlayers();
  }

}
