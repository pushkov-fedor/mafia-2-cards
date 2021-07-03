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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {}
