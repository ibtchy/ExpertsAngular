import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { PostsEditComponent } from './components/posts-edit/posts-edit.component';

import { PostsListAdminComponent } from './components/posts-list-admin/posts-list-admin.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { CommentairesListAdminComponent } from './components/commentaires-list-admin/commentaires-list-admin.component';

import { SubjectsListAdminComponent } from './components/subjects-list-admin/subjects-list-admin.component';
import { SubjectsPostsComponent } from './components/subjects-posts/subjects-posts.component';

const appRoutes: Routes = [  
  { path: 'posts', component: PostsListComponent },    
  { path: 'addpost/:ids', component: AddPostComponent },   
  { path: 'subjects', component: SubjectListComponent },  
  { path: 'addsubject', component: AddSubjectComponent },  
  { path: 'adminsubjects', component: SubjectsListAdminComponent },  
  { path: 'adminposts', component: PostsListAdminComponent },
  { path: 'admincommentaires', component: CommentairesListAdminComponent },  
  

  { path: 'subjects/:id', component: EditSubjectComponent }, 
  { path: 'posts/:id/:ids', component: PostsEditComponent }, 

  { path: 'posts_subject/:id', component: SubjectsPostsComponent }, 
  { path: 'posts_comments/:id', component:  CommentairesListAdminComponent }, 



];  

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
