import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from 'src/app/services/commentaire.service';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  constructor(private postservice: PostService,private commentairesservice: CommentaireService,
        private route: ActivatedRoute,
    private router: Router) { }
    commentaires:any;
  posts: any;
  id_p: any;
  id_u:any;
  likes: any;
  dislikes: any;
  comment:any;
  data:any;
  id_s:any;
  ngOnInit(): void {
    this.retrievePosts();
    this.id_s = this.route.snapshot.paramMap.get('id');
    this.retrievePosts();

    
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
    console.log(id+"p_id")
    this.postservice.like(1,id)
    
    .subscribe(
      (data:any) => {
        console.log(data);
      },
      (error:any) => {
        console.log(error);
      });
      setTimeout(() => {
        this.retrievePosts();
      }, 500);
      
    
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
          this.dislikes = data;
          console.log(data);
        },
        (error:any) => {
          console.log(error);
        });
     
  }
  sendcomment(id:any):void {
const dataz ={
  text:this.comment,
  date_com:new Date()
}
    this.commentairesservice.create(dataz,2,id)
    .subscribe(
      (data:any) => {
        console.log(data);
        location.reload();
      },
      (error:any) => {
        console.log(error);
      });
  }

}
