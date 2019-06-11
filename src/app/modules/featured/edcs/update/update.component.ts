import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyvalueService } from 'src/app/services/keyvalue/keyvalue.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EdcsComponent } from '../edcs.component';
import { UpdateDialogData } from 'src/app/models/model.updatedialog';
import { Store } from 'src/app/models/model.store';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass']
})
export class UpdateComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private keyvalue: KeyvalueService,
              public dialogRef: MatDialogRef<EdcsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Store) {
    this.formGroup = formBuilder.group({
      courseName: [null, Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.data.courseName);
  }

  updateData(item) {
    const newItem = this.data;
    newItem.courseName = item.courseName;
    this.keyvalue.updateCourseName(newItem).toPromise().then(() => this.dialogRef.close())
      .catch(err => {
        this.keyvalue.updateCourseName2(newItem).toPromise().then(() => this.dialogRef.close());
      });
  }

}
