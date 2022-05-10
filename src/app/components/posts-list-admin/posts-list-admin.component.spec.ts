import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListAdminComponent } from './posts-list-admin.component';

describe('PostsListAdminComponent', () => {
  let component: PostsListAdminComponent;
  let fixture: ComponentFixture<PostsListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
