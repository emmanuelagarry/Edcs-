import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyvalueService } from 'src/app/services/keyvalue/keyvalue.service';
import { Observable } from 'rxjs';
import { Store } from 'src/app/models/model.store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UpdateComponent } from './update/update.component';




@Component({
  selector: 'app-edcs',
  templateUrl: './edcs.component.html',
  styleUrls: ['./edcs.component.sass']
})
export class EdcsComponent implements OnInit {

  store: Observable<Store[]>;
  formGroup: FormGroup;
  formGroup2: FormGroup;

  constructor(private formBuilder: FormBuilder, private keyvalue: KeyvalueService,
              private dialog: MatDialog) {
    this.formGroup = formBuilder.group({
      courseCode: [null, Validators.required],
      courseName: [null, Validators.required]
    });

    this.store = this.keyvalue.getAll();
  }


  ngOnInit() {

  }

  submitData(formData) {
    this.keyvalue.addToMongodb(formData).subscribe(ee => console.log(ee));
  }

  updateCourseName( key: string, name: string ) {

    this.dialog.open(UpdateComponent, {
      width: '250px',
      data: { id: key, courseName: name }

    });
  }

  deleteCourse(formdata1, formdata2) {
    const promptMessage = confirm('Delete this course? : ' + formdata2);
    console.log(formdata1);
    if (promptMessage === true) {
      this.keyvalue.deleteCourse(formdata1).subscribe(e => console.log(e));
    }
  }

}
