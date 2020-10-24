import {RouterModule, Routes} from '@angular/router';
import {GerichteComponent} from './gerichte/gerichte.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {MensenComponent} from './mensen/mensen.component';
import {PraeferenzenComponent} from './praeferenzen/praeferenzen.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {HilfeComponent} from './hilfe/hilfe.component';
import {ImpressumModule} from './impressum/impressum.module';
import {HilfeModule} from './hilfe/hilfe.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/gerichte', pathMatch: 'full'},
  {path: 'gerichte', component: GerichteComponent, data: {title: 'Speiseplan'}},
  {path: 'about', component: AboutComponent, data: {title: 'Über uns'}},
  {
    path: 'mensen', component: MensenComponent, data: {title: 'Mensen'}
  },
  {
    path: 'praeferenzen', component: PraeferenzenComponent,
    loadChildren: () => import('./praeferenzen/praeferenzen.module').then(m => m.PraeferenzenModule),
    data: {title: 'About Us'}
  },
  {
    path: 'impressum', component: ImpressumComponent,
    loadChildren: () => import('./impressum/impressum.module').then(m => ImpressumModule), data: {title: 'Impressum'}
  },
  {
    path: 'hilfe',
    component: HilfeComponent,
    loadChildren: () => import('./hilfe/hilfe.module').then(m => HilfeModule),
    data: {title: 'Hilfe'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

