import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PraeferenzenComponent} from './praeferenzen.component';


const routes: Routes = [{ path: '', component: PraeferenzenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PraeferenzenRoutingModule {}
