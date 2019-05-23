import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyvalueService } from 'src/app/services/keyvalue/keyvalue.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EdcsComponent } from '../edcs.component';
import { UpdateDialogData } from 'src/app/models/model.updatedialog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private keyvalue: KeyvalueService,
              public dialogRef: MatDialogRef<EdcsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UpdateDialogData) {
    this.formGroup = formBuilder.group({
      courseName: [null, Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.data.id);
  }

  updateData(item) {
    this.keyvalue.updateCourseName(this.data.id, item.courseName).subscribe(e => console.log(e));
  }

}
