import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdcsRoutingModule } from './edcs-routing.module';
import { EdcsComponent } from './edcs.component';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [EdcsComponent, UpdateComponent],
  imports: [
    CommonModule,
    EdcsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    // MaterialModules
    MatInputModule,
    MatFormFieldModule
  ],
  entryComponents: [UpdateComponent]
})
export class EdcsModule { }
