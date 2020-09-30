import {RouterModule, Routes} from '@angular/router';
import {GerichteComponent} from './gerichte/gerichte.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';
import {MensenComponent} from './mensen/mensen.component';
import {PraeferenzenComponent} from './praeferenzen/praeferenzen.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {HilfeComponent} from './hilfe/hilfe.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/gerichte', pathMatch: 'full'},
  {path: 'gerichte', component: GerichteComponent, data: {title: 'Speiseplan'}},
  {path: 'about', component: AboutComponent, data: {title: 'Über uns'}},
  {
    path: 'mensen', component: MensenComponent,
    loadChildren: () => import('./mensen/mensen.module').then(m => m.MensenModule), data: {title: 'Mensen'}
  },
  {
    path: 'praeferenzen', component: PraeferenzenComponent,
    loadChildren: () => import('./praeferenzen/praeferenzen.module').then(m => m.PraeferenzenModule),
    data: {title: 'About Us'}
  },
  {path: 'impressum', component: ImpressumComponent, data: {title: 'Impressum'}},
  {path: 'hilfe', component: HilfeComponent, data: {title: 'Hilfe'}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
