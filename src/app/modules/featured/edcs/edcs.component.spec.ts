import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdcsComponent } from './edcs.component';

describe('EdcsComponent', () => {
  let component: EdcsComponent;
  let fixture: ComponentFixture<EdcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
