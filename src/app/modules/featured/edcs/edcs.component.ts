import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KeyvalueService } from 'src/app/services/keyvalue/keyvalue.service';
import { Observable, Subject, BehaviorSubject, AsyncSubject } from 'rxjs';
import { switchMap} from 'rxjs/operators';
import { Store } from 'src/app/models/model.store';
import { MatDialog } from '@angular/material';
import { UpdateComponent } from './update/update.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edcs',
  templateUrl: './edcs.component.html',
  styleUrls: ['./edcs.component.sass']
})
export class EdcsComponent implements OnInit {
  store: Observable<Store[]>; formGroup: FormGroup; formGroup2: FormGroup;
  storeSubject$: Subject<Store[]>;
  fakeItem: string;

  constructor(private formBuilder: FormBuilder, private keyvalue: KeyvalueService,
              private dialog: MatDialog, private router: Router) {
    this.formGroup = formBuilder.group({
      courseCode: [null, Validators.required],
      courseName: [null, Validators.required]
    });
    this.storeSubject$ = new BehaviorSubject<Store[]>(null);
    this.store  = this.storeSubject$.pipe(switchMap(() => this.keyvalue.getAll()));

  }
  ngOnInit() { }

  submitData(formData) {
    const submitTheData = this.keyvalue.addToMongodb(formData).toPromise();
    submitTheData.then(
      () => this.storeSubject$.next()
    );
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  updateCourseName(courses: Store) {
    this.dialog.open(UpdateComponent, {
      width: '250px',
      data: courses});
  }
  deleteCourse(formdata1, formdata2) {
    const promptMessage = confirm('Delete this course? : ' + formdata2);
    console.log(formdata1);
    if (promptMessage === true) {
      const deleteTheData = this.keyvalue.deleteCourse(formdata1).toPromise();
      deleteTheData.then(
        () => this.storeSubject$.next()
      );
    }
  }

  trackByFn(index, item) {
    return index;
  }

}
