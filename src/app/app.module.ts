import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddForumComponent } from './components/add-forum/add-forum.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { SubjectsListAdminComponent } from './components/subjects-list-admin/subjects-list-admin.component';
import { PostsListAdminComponent } from './components/posts-list-admin/posts-list-admin.component';
import { PostsEditAdminComponent } from './components/posts-edit-admin/posts-edit-admin.component';
import { SubjectsEditAdminComponent } from './components/subjects-edit-admin/subjects-edit-admin.component';
import { PostsEditComponent } from './components/posts-edit/posts-edit.component';
import { SubjectsPostsComponent } from './components/subjects-posts/subjects-posts.component';
import { CommentairesListAdminComponent } from './components/commentaires-list-admin/commentaires-list-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddForumComponent,
    PostsListComponent,
    AddPostComponent,
    SubjectListComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    SubjectsListAdminComponent,
    PostsListAdminComponent,
    PostsEditAdminComponent,
    SubjectsEditAdminComponent,
    PostsEditComponent,
    SubjectsPostsComponent,
    CommentairesListAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
