import { RoomStartComponent } from './room-start/room-start.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../shared/shared.module';
import { RoomRoutingModule } from './room-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomCreateComponent } from './room-create/room-create.component';

@NgModule({
  imports: [CommonModule, RoomRoutingModule, SharedModule],
  declarations: [RoomCreateComponent, RoomStartComponent],
})
export class RoomModule {}
