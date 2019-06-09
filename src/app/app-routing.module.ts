// import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/featured/edcs/edcs.module#EdcsModule',
  },
  {
    path: '**',
    loadChildren: './modules/featured/edcs/edcs.module#EdcsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
