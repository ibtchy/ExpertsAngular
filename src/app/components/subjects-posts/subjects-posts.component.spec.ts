import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsPostsComponent } from './subjects-posts.component';

describe('SubjectsPostsComponent', () => {
  let component: SubjectsPostsComponent;
  let fixture: ComponentFixture<SubjectsPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
