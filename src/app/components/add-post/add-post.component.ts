import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = {
    content: '',
    date: undefined
    
  };
  submitted = '';
  constructor(private postservice : PostService,  private route: ActivatedRoute,
    private router: Router) { }
  id_s:any;
  ngOnInit(): void {
    this.id_s = this.route.snapshot.paramMap.get('ids');
  }
  savePost(): void {
    const data = {
      content: this.post.content,
      date: this.post.date
    };
    this.postservice.create(data,2,this.id_s)
      .subscribe(
        
        data => {
           
           if(data!=null)
           {
            this.post=data.post;
            this.submitted='submitted'
           }
           
           else
           this.submitted='contains bad word'
          
           console.log(this.submitted);
        },
        error => {
          console.log(error);
        });
  }
  newPost(): void {
    this.submitted = '';
    this.post = {
      content: '',
      date: undefined
    };
  }
}
