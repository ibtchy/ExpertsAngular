import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

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
  LikePost(id:any): void {
    this.postservice.like(1,id)
    .subscribe(
      (data:any) => {
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      });
    }
    disLikePost(id:any): void {
      this.postservice.dislike(1,id)
      .subscribe(
        (data:any) => {
          console.log(data);
        },
        (error:any) => {
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
          this.likes = data;
          console.log(data);
        },
        (error:any) => {
          console.log(error);
        });
     
  }

}