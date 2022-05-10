import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-posts-list-admin',
  templateUrl: './posts-list-admin.component.html',
  styleUrls: ['./posts-list-admin.component.css']
})
export class PostsListAdminComponent implements OnInit {

  constructor(private postservice: PostService,    private route: ActivatedRoute,
    private router: Router) { }
  posts: any;
  likes: number =0;
  dislikes: number =0;
  ngOnInit(): void {
    this.retrievePosts();
  }
  retrievePosts(): void {
    this.postservice.getAll()
      .subscribe(
        data => {
          this.posts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  deletePost(id:any): void {
    this.postservice.delete(id)
      .subscribe(
        response => {
          this.router.navigate(['/adminposts']);
          location.reload();
        },
        error => {
          console.log(error);
        });
     
  }
  nbrpost(id:any): void {
    this.postservice.getnbrlikes(id)
      .subscribe(
        (data:any) => {
          this.likes = data;
          console.log(data);
        },
        (error:any) => {
          console.log(error);
        });
     
  }
  nbrdpost(id:any): void {
    this.postservice.getnbrdislikes(id)
      .subscribe(
        (data:any) => {
          this.dislikes = data;
          console.log(data);
        },
        (error:any) => {
          console.log(error);
        });
      
  }

}
