import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsEditAdminComponent } from './subjects-edit-admin.component';

describe('SubjectsEditAdminComponent', () => {
  let component: SubjectsEditAdminComponent;
  let fixture: ComponentFixture<SubjectsEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsEditAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
