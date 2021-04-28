import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { PlayerListComponent } from './player-list/player-list.component';

const routes: Routes = [
  { path: 'scorecard', component: ScorecardComponent },
  { path: 'player-list', component: PlayerListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
