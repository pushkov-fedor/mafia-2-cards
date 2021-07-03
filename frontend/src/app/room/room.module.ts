import { SharedModule } from './../shared/shared.module';
import { RoomRoutingModule } from './room-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomCreateComponent } from './room-create/room-create.component';

@NgModule({
  declarations: [RoomCreateComponent],
  imports: [CommonModule, RoomRoutingModule, SharedModule],
})
export class RoomModule {}
