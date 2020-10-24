import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HilfeComponent} from './hilfe.component';
import {HilfeRoutingModule} from './hilfe.routing.module';

@NgModule({
  declarations: [
    HilfeComponent
  ],
  imports: [
    CommonModule,
    HilfeRoutingModule
  ]
})
export class HilfeModule {
}
