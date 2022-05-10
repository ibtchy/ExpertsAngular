import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
@Component({
  selector: 'app-posts-edit',
  templateUrl: './posts-edit.component.html',
  styleUrls: ['./posts-edit.component.css']
})
export class PostsEditComponent implements OnInit {
  post: Post = {
    content: '',
    date: undefined,
    
  };
  submitted = false;

  constructor(    private route: ActivatedRoute,
    private router: Router,private postservice : PostService) { }
    id_p:any;
    id_s:any;
    ngOnInit(): void {
      this.id_p = this.route.snapshot.paramMap.get('id');
      this.id_s = this.route.snapshot.paramMap.get('ids');

    }
    updatePost(): void {
      const data = {
        id:this.id_p,
        content: this.post.content,
        date: this.post.date
      };
      this.postservice.update(data,1,this.id_s)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }
}
