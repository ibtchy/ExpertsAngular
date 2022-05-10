import { Component, OnInit } from '@angular/core';
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
  submitted = false;
  constructor(private postservice : PostService) { }

  ngOnInit(): void {
  }
  savePost(): void {
    const data = {
      content: this.post.content,
      date: this.post.date
    };
    this.postservice.create(data,16,1)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newPost(): void {
    this.submitted = false;
    this.post = {
      content: '',
      date: undefined
    };
  }
}
