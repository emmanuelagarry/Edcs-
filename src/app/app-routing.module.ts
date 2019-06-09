// import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/featured/edcs/edcs.module').then(m => m.EdcsModule),
  },
  {
    path: '**',
    loadChildren: () => import('./modules/featured/edcs/edcs.module').then(m => m.EdcsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
