import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoomCreateComponent } from './room-create/room-create.component';

const routes: Routes = [
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
