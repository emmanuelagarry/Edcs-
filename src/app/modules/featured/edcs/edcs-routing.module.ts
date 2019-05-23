import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdcsComponent } from './edcs.component';

const routes: Routes = [
  {
    path: '',
    component: EdcsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EdcsRoutingModule { }
