import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsEditAdminComponent } from './posts-edit-admin.component';

describe('PostsEditAdminComponent', () => {
  let component: PostsEditAdminComponent;
  let fixture: ComponentFixture<PostsEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsEditAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
