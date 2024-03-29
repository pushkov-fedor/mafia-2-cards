import { RoomJoinComponent } from './room-join/room-join.component';
import { RoomWaitComponent } from './room-wait/room-wait.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomStartComponent } from './room-start/room-start.component';
import { RoomCreateComponent } from './room-create/room-create.component';

const routes: Routes = [
  {
    path: '',
    component: RoomStartComponent,
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: RoomCreateComponent,
  },
  {
    path: 'join',
    component: RoomJoinComponent,
  },
  {
    path: 'wait',
    component: RoomWaitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
