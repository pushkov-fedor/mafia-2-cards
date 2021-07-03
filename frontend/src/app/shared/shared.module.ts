import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [MatSliderModule, MatButtonModule, MatToolbarModule, MatIconModule],
  exports: [MatSliderModule, MatButtonModule, MatToolbarModule, MatIconModule],
})
export class SharedModule {}
