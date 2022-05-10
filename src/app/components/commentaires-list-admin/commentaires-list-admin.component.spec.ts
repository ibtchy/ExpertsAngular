import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesListAdminComponent } from './commentaires-list-admin.component';

describe('CommentairesListAdminComponent', () => {
  let component: CommentairesListAdminComponent;
  let fixture: ComponentFixture<CommentairesListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentairesListAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentairesListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
