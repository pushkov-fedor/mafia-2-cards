import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { GameRoutingModule } from './game-routing.module';
import { IdleComponent } from './idle/idle.component';
import { GameActionComponent } from './action/action.component';
import { GameComponent } from './main/game.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GameRoutingModule,
    SharedModule,
  ],
  declarations: [GameComponent, GameActionComponent, IdleComponent],
})
export class GameModule {}
