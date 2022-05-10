import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentaireService } from 'src/app/services/commentaire.service';
import { timeout } from 'rxjs';
import { Post } from 'src/app/models/post.model';
@Component({
  selector: 'app-subjects-posts',
  templateUrl: './subjects-posts.component.html',
  styleUrls: ['./subjects-posts.component.css']
})
export class SubjectsPostsComponent implements OnInit {

  constructor(private postservice: PostService,    private route: ActivatedRoute,
    private commentairesservice: CommentaireService,
    private router: Router) { }
    commentaires:any;
  posts: any;
  likes: number =0;
  dislikes: number =0;
  id_s:any;
  range:any;
  search?:String;
  
  comment: String[] =[];
  ngOnInit(): void {
    this.id_s = this.route.snapshot.paramMap.get('id');
    this.retrievePosts();
  console.log(this.route.snapshot);
  }
  searchchange(value:any){
    
    if(value.length>0)
    {
      this.search=value
    let result: Post[] = [];
    for (var index in this.posts) {
      
      if(this.posts[index].content.includes(this.search)){
        result.push(this.posts[index])
      }
      console.log(result);
    }
    this.posts=result;
    console.log(this.search)
    }
    else
    this.retrievePosts()
    
  }
  changecomment(value:any,index:number):void{
    
    this.comment[index]=value;
    console.log(this.comment[index]);
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
    this.postservice.like(2,id)
    
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
      this.postservice.dislike(2,id)
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
  sendcomment(id:any,index:number):void {
    if(this.comment[index]){
      const dataz ={
        text:this.comment[index],
        date_com:new Date()
      }
      
          this.commentairesservice.create(dataz,2,id)
          .subscribe(
            (data:any) => {
              console.log(data);
              setTimeout(() => {
                this.retrievePosts();
              }, 500);        
            },
            (error:any) => {
              console.log(error);
            });
        }
        this.comment[index]=''
    }




}
