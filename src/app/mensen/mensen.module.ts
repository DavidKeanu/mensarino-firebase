import {NgModule} from '@angular/core';
import {MensenComponent} from './mensen.component';
import {MatListModule, MatListOption, MatSelectionList} from '@angular/material/list';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    MensenComponent
  ],
  imports: [
    CommonModule,
    MatListModule

  ],
  exports: [
    MensenComponent,
    MatSelectionList,
    MatListOption
  ],
})
export class MensenModule {
}

