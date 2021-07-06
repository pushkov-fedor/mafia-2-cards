import { RoomWaitComponent } from './room-wait/room-wait.component';
import { RoomStartComponent } from './room-start/room-start.component';
import { RoomRoutingModule } from './room-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RoomCreateComponent } from './room-create/room-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RoomRoutingModule,
    SharedModule,
  ],
  declarations: [RoomCreateComponent, RoomStartComponent, RoomWaitComponent],
})
export class RoomModule {}
