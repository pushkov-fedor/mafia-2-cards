import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [MatSliderModule, MatButtonModule],
  providers: [],
  exports: [MatSliderModule, MatButtonModule],
})
export class SharedModule {}
