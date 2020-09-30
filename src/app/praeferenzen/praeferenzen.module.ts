import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PraeferenzenComponent} from './praeferenzen.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatSlideToggle, MatSlideToggleChange, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChip, MatChipsModule} from '@angular/material/chips';
import {MatSlider, MatSliderChange, MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {PraeferenzenRoutingModule} from './praeferenzen.routing.module';

@NgModule({
  declarations: [
    PraeferenzenComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatChipsModule,
    MatSlideToggleModule,
    FormsModule,
    PraeferenzenRoutingModule
  ]
})
export class PraeferenzenModule {
}
