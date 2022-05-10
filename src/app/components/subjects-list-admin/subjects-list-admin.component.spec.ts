import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsListAdminComponent } from './subjects-list-admin.component';

describe('SubjectsListAdminComponent', () => {
  let component: SubjectsListAdminComponent;
  let fixture: ComponentFixture<SubjectsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
