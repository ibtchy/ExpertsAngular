import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-subjects-posts',
  templateUrl: './subjects-posts.component.html',
  styleUrls: ['./subjects-posts.component.css']
})
export class SubjectsPostsComponent implements OnInit {

  constructor(private postservice: PostService,    private route: ActivatedRoute,
    private router: Router) { }

  posts: any;
  likes: number =0;
  dislikes: number =0;
  id_s:any;
  
  ngOnInit(): void {
    this.id_s = this.route.snapshot.paramMap.get('id');
    this.retrievePosts();
  console.log(this.route.snapshot);
  }
  retrievePosts(): void {
    this.postservice.getpostssubject(this.id_s)
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
