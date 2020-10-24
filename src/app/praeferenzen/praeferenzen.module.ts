import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PraeferenzenComponent} from './praeferenzen.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
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
