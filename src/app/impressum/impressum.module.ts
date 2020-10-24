import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImpressumComponent} from './impressum.component';
import {MatDividerModule} from '@angular/material/divider';
import {ImpressumRoutingModule} from './impressum.routing.module';

@NgModule({
  declarations: [
    ImpressumComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    ImpressumRoutingModule

  ]
})
export class ImpressumModule {
}
