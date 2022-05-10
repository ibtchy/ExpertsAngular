import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AddReclamationComponent } from './components/add-reclamation/add-reclamation.component';
import { AddSubjectComponent } from './components/add-subject/add-subject.component';
import { EditSubjectComponent } from './components/edit-subject/edit-subject.component';
import { PostsListAdminComponent } from './components/posts-list-admin/posts-list-admin.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { ReclamationListComponent } from './components/reclamation-list/reclamation-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectsListAdminComponent } from './components/subjects-list-admin/subjects-list-admin.component';
import { SubjectsPostsComponent } from './components/subjects-posts/subjects-posts.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostsListComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: 'subjects', component: SubjectListComponent },
  { path: 'addsubject', component: AddSubjectComponent },
  { path: 'adminsubjects', component: SubjectsListAdminComponent },
  { path: 'adminposts', component: PostsListAdminComponent },
  { path: 'addReclamation', component: AddReclamationComponent },
  { path: 'subjects/:id', component: EditSubjectComponent },
  { path: 'posts_subject/:id', component: SubjectsPostsComponent },
  { path: 'reclamationList', component: ReclamationListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
